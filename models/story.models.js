const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const storySchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    thumbnailUrl: {
      type: String,
      require: true,
    },
    story: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Story = mongoose.model("Story", storySchema);

module.exports = Story;
