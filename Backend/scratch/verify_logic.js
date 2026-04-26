const mongoose = require('mongoose');
require('dotenv').config();
const UserModel = require('../model/UserModel');
const { HoldingsModel } = require('../model/HoldingsModel');
const { OrdersModel } = require('../model/OrdersModel');

const uri = process.env.MONGO_URL;

async function testOrderFlow() {
  await mongoose.connect(uri);
  console.log('✅ Connected');

  // 1. Create a test user
  const testUser = new UserModel({
    name: "Tester",
    email: `test_${Date.now()}@test.com`,
    passwordHash: "dummy",
    balance: 100000
  });
  await testUser.save();
  const userId = testUser._id;
  console.log(`User created with balance: ${testUser.balance}`);

  // 2. Simulate BUY
  const stockName = "RELIANCE";
  const qty = 2;
  const price = 2500;
  const buyCost = qty * price;

  console.log(`Buying ${qty} ${stockName} at ${price} (Cost: ${buyCost})`);
  
  // Real logic from index.js
  if (testUser.balance >= buyCost) {
    testUser.balance -= buyCost;
    await testUser.save();
    
    const newOrder = new OrdersModel({ name: stockName, qty, price, mode: "BUY", user: userId });
    await newOrder.save();

    const newHolding = new HoldingsModel({ name: stockName, qty, price, avg: price, user: userId });
    await newHolding.save();
    console.log(`BUY SUCCESS. New Balance: ${testUser.balance}`);
  }

  // 3. Simulate SELL
  const sellQty = 1;
  const sellPrice = 2600;
  const sellProceeds = sellQty * sellPrice;
  console.log(`Selling ${sellQty} ${stockName} at ${sellPrice} (Proceeds: ${sellProceeds})`);

  let holding = await HoldingsModel.findOne({ name: stockName, user: userId });
  if (holding && holding.qty >= sellQty) {
    holding.qty -= sellQty;
    testUser.balance += sellProceeds;
    await testUser.save();
    await holding.save();

    const sellOrder = new OrdersModel({ name: stockName, qty: sellQty, price: sellPrice, mode: "SELL", user: userId });
    await sellOrder.save();
    console.log(`SELL SUCCESS. New Balance: ${testUser.balance}`);
  }

  // Cleanup
  await UserModel.deleteOne({ _id: userId });
  await HoldingsModel.deleteMany({ user: userId });
  await OrdersModel.deleteMany({ user: userId });
  console.log('Cleanup done.');
  process.exit(0);
}

testOrderFlow().catch(console.error);
