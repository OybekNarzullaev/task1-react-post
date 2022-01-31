const mongoose = require("mongoose");
module.exports = mongoose.model(
  "Post",
  mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      authorId: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )
);
