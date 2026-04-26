require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const UserModel = require("./model/UserModel");
const userRoute = require("./routes/user.js");
const auth = require("./middleware/auth");



const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", userRoute);


app.get("/addGlobalHoldings", async (req, res) => { // Insert holdings WITHOUT user ID (system defaults)
  let tempHoldings = [
    { name: "RELIANCE", qty: 10, avg: 2500, price: 2600, net: "+4.0%", day: "+1.2%" },
    { name: "TCS", qty: 5, avg: 3200, price: 3100, net: "-3.1%", day: "-0.5%", isLoss: true },
  ];

  for (let item of tempHoldings) {
    let newHolding = new HoldingsModel(item);
    await newHolding.save();
  }
  res.send("Global Defaults Seeded!");
});

app.get("/addHoldings", auth, async (req, res) => { //insert holdings into db
  let tempHoldings = [
    {
      name: "BHARTIARTL",
      qty: 2,
      avg: 538.05,
      price: 541.15,
      net: "+0.58%",
      day: "+2.99%",
    },
    {
      name: "HDFCBANK",
      qty: 2,
      avg: 1383.4,
      price: 1522.35,
      net: "+10.04%",
      day: "+0.11%",
    },
    {
      name: "HINDUNILVR",
      qty: 1,
      avg: 2335.85,
      price: 2417.4,
      net: "+3.49%",
      day: "+0.21%",
    },
    {
      name: "INFY",
      qty: 1,
      avg: 1350.5,
      price: 1555.45,
      net: "+15.18%",
      day: "-1.60%",
      isLoss: true,
    },
    {
      name: "ITC",
      qty: 5,
      avg: 202.0,
      price: 207.9,
      net: "+2.92%",
      day: "+0.80%",
    },
    {
      name: "KPITTECH",
      qty: 5,
      avg: 250.3,
      price: 266.45,
      net: "+6.45%",
      day: "+3.54%",
    },
    {
      name: "M&M",
      qty: 2,
      avg: 809.9,
      price: 779.8,
      net: "-3.72%",
      day: "-0.01%",
      isLoss: true,
    },
    {
      name: "RELIANCE",
      qty: 1,
      avg: 2193.7,
      price: 2112.4,
      net: "-3.71%",
      day: "+1.44%",
    },
    {
      name: "SBIN",
      qty: 4,
      avg: 324.35,
      price: 430.2,
      net: "+32.63%",
      day: "-0.34%",
      isLoss: true,
    },
    {
      name: "SGBMAY29",
      qty: 2,
      avg: 4727.0,
      price: 4719.0,
      net: "-0.17%",
      day: "+0.15%",
    },
    {
      name: "TATAPOWER",
      qty: 5,
      avg: 104.2,
      price: 124.15,
      net: "+19.15%",
      day: "-0.24%",
      isLoss: true,
    },
    {
      name: "TCS",
      qty: 1,
      avg: 3041.7,
      price: 3194.8,
      net: "+5.03%",
      day: "-0.25%",
      isLoss: true,
    },
    {
      name: "WIPRO",
      qty: 4,
      avg: 489.3,
      price: 577.75,
      net: "+18.08%",
      day: "+0.32%",
    },
  ];

  for (let item of tempHoldings) {
    let newHolding = new HoldingsModel({
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net || item.day,
      day: item.day,
      user: req.user.id,
    });
    await newHolding.save();
  }
  res.send("Holdings Seeded!");
});

app.get("/addPositions", auth, async (req, res) => {
  let tempPositions = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];

  for (let item of tempPositions) {
    let newPosition = new PositionsModel({
      product: item.product,
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
      isLoss: item.isLoss,
      user: req.user.id,
    });
    await newPosition.save();
  }
  res.send("Positions Seeded!");
});


//fetch all holdings from db (user specific + default system holdings)
app.get("/allHoldings", auth, async (req, res) => {
  let allHoldings = await HoldingsModel.find({ 
    $or: [{ user: req.user.id }, { user: { $exists: false } }, { user: null }] 
  });
  res.json(allHoldings);
});

//fetch all pos from db (user specific + default system positions)
app.get("/allPositions", auth, async (req, res) => {
  let allPositions = await PositionsModel.find({ 
    $or: [{ user: req.user.id }, { user: { $exists: false } }, { user: null }] 
  });
  res.json(allPositions);
});

//fetch all orders from db (user specific history)
app.get("/allOrders", auth, async (req, res) => {
  let allOrders = await OrdersModel.find({ 
    $or: [{ user: req.user.id }, { user: { $exists: false } }, { user: null }] 
  });
  res.json(allOrders);
});


app.post("/newOrder", auth, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    console.log(`Processing ${mode} order for ${name} (User: ${req.user.id})`);

    // 1. Save the Order history
    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
      user: req.user.id,
    });
    await newOrder.save();

    // 2. Update Holdings (Wallet)
    const user = await UserModel.findById(req.user.id);
    const orderValue = price * qty;

    if (mode === "BUY") {
      // Check funds
      if (user.balance < orderValue) {
        return res.status(400).send("Insufficient margin to place order");
      }

      // Deduct funds
      user.balance -= orderValue;

      // Find if user already has this stock
      let holding = await HoldingsModel.findOne({ name, user: req.user.id });

      if (holding) {
        // Update existing holding
        let totalQty = holding.qty + qty;
        let totalCost = (holding.avg * holding.qty) + (price * qty);
        holding.qty = totalQty;
        holding.avg = totalCost / totalQty;
        await holding.save();
      } else {
        // Create new holding
        const newHolding = new HoldingsModel({
          name,
          qty,
          price,
          avg: price,
          net: "+0.00%",
          day: "+0.00%",
          user: req.user.id,
        });
        await newHolding.save();
      }
    } else if (mode === "SELL") {
      let holding = await HoldingsModel.findOne({ name, user: req.user.id });
      if (holding && holding.qty >= qty) {
        holding.qty -= qty;
        
        // Add proceeds to balance
        user.balance += orderValue;

        if (holding.qty === 0) {
          await HoldingsModel.deleteOne({ _id: holding._id });
        } else {
          await holding.save();
        }
      } else {
        return res.status(400).send("You don't own enough quantity to sell");
      }
    }

    await user.save();
    console.log("Portfolio and Balance updated successfully!");
    res.status(201).send("Order, Portfolio and Balance updated!");
  } catch (err) {
    console.error("Database Save Error:", err);
    res.status(500).send("Error updating portfolio");
  }
});



app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
});