const mongoose = require("mongoose");
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
