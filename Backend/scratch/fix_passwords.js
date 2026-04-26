const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();
// Import the User Schema directly to avoid model name collisions
const { UserSchema } = require('../model/UserModel');
const User = mongoose.model("user", UserSchema);

const fixPasswords = async () => {
  try {
    console.log("Connecting to Database...");
    await mongoose.connect(process.env.MONGO_URL);
    const users = await User.find({});
    console.log(`Found ${users.length} users.`);
    
    for (let user of users) {
      // Check if passwordHash exists. If not, migreate.
      if (!user.passwordHash || user.passwordHash === "") {
        console.log(`Securing account for: ${user.email}`);
        
        // Use existing 'password' field, or a default 'user123' if everything is missing
        const plain = user.password || "user123";
        
        const salt = await bcrypt.genSalt(10);
        user.passwordHash = await bcrypt.hash(plain, salt);
        await User.updateOne({ _id: user._id }, { $set: { passwordHash: user.passwordHash }, $unset: { password: "" } });
      }
    }
    console.log("Success! Your old accounts are now secure and ready to login.");
    process.exit();
  } catch (err) {
    console.error("Migration failed:", err);
    process.exit(1);
  }
};

fixPasswords();
