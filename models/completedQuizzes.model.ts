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
});

const CompletedQuizzes = mongoose.model("CompletedQuizzes", completedQuizzes);

export default CompletedQuizzes;
