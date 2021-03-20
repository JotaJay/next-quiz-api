import mongoose from "mongoose";

const questionsSchema = new mongoose.Schema({
  timer: {
    type: Number,
    default: 60,
  },
  question: String,
  correctAnswer: String,
  incorrectAnswers: [String],
});

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  difficulty: {
    type: String,
    required: true,
    trim: true,
    enum: ["easy", "medium", "hard"],
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
  questions: [questionsSchema],
});

export default mongoose.models["Quiz"] || mongoose.model("Quiz", quizSchema);
