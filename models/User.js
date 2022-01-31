const mongoose = require("mongoose");
module.exports = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      address: {
        street: {
          type: String,
          required: true,
        },
        suite: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        zipcode: {
          type: String,
          required: true,
        },
        geo: {
          lat: {
            type: String,
            required: true,
          },
          lng: {
            type: String,
            required: true,
          },
        },
      },
      phone: {
        type: String,
        required: true,
      },
      website: {
        type: String,
        required: true,
      },
      company: {
        name: {
          type: String,
          required: true,
        },
        catchPhrase: {
          type: String,
          required: true,
        },
        bs: {
          type: String,
          required: true,
        },
      },
    },
    {
      timestamps: true,
    }
  )
);
