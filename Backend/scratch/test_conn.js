const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URL;

console.log('Connecting to:', uri.replace(/\/\/.*@/, '//<HIDDEN_USER:HIDDEN_PASS>@'));

mongoose.connect(uri)
  .then(() => {
    console.log('✅ Connection successful!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Connection failed:', err);
    process.exit(1);
  });
