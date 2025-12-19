// ===============================
// 1️⃣ Load environment variables
// ===============================
require("dotenv").config();

// ===============================
// 2️⃣ Imports
// ===============================
const express = require("express");
const mongoose = require("mongoose");

// ===============================
// 3️⃣ App init
// ===============================
const app = express();

// ===============================
// 4️⃣ Middlewares
// ===============================
app.use(express.json());

// ===============================
// 5️⃣ Test route (optional but useful)
// ===============================
app.get("/", (req, res) => {
  res.send("VirA backend is running 🚀");
});

// ===============================
// 6️⃣ MongoDB Connection
// ===============================
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
  })
  .then(() => {
    console.log("✅ MongoDB Connected");

    // ===============================
    // 7️⃣ Start Server (ONLY after DB)
    // ===============================
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:");
    console.error(err);
  });
