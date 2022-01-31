const mongoose = require("mongoose");
module.exports = mongoose.model(
  "Reply",
  mongoose.Schema(
    {
      body: {
        type: String,
        required: true,
      },
      commentId: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )
);
