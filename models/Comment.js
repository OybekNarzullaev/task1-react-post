const mongoose = require("mongoose");
module.exports = mongoose.model(
  "Comment",
  mongoose.Schema(
    {
      body: {
        type: String,
        required: true,
      },
      postId: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )
);
