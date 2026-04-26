const mongoose = require('mongoose');
require('dotenv').config();
const { HoldingsModel } = require('../model/HoldingsModel');

const uri = process.env.MONGO_URL;

mongoose.connect(uri)
  .then(async () => {
    console.log('✅ Connected to DB');
    const all = await HoldingsModel.find({});
    console.log('Total Holdings in DB:', all.length);
    console.log('Holdings Sample:', JSON.stringify(all.slice(0, 3), null, 2));
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Error:', err);
    process.exit(1);
  });
