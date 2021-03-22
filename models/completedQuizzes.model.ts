import mongoose from "mongoose";

const completedQuizzes = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
    required: true,
  },
  score: Number,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.models["CompletedQuizzes"] ||
  mongoose.model("CompletedQuizzes", completedQuizzes);
