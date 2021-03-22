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
    lowercase: true,
  },
  subject: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  subCategory: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  difficulty: {
    type: String,
    required: true,
    trim: true,
    enum: ["easy", "medium", "hard"],
    lowercase: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  questions: [questionsSchema],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.models["Quiz"] || mongoose.model("Quiz", quizSchema);
