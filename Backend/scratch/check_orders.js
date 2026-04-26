const mongoose = require('mongoose');
require('dotenv').config();
const { OrdersSchema } = require('../schemas/OrdersSchema');
const OrdersModel = mongoose.model("order", OrdersSchema);

const checkDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("--- Current Orders in Database ---");
  const orders = await OrdersModel.find({}).populate('user', 'name email');
  if (orders.length === 0) {
    console.log("No orders found yet.");
  } else {
    orders.forEach((order, i) => {
      console.log(`${i+1}. Stock: ${order.name} | Qty: ${order.qty} | Mode: ${order.mode} | User: ${order.user ? order.user.email : 'No User Linked'}`);
    });
  }
  process.exit();
};

checkDB();
