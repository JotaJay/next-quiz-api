import mongoose from "mongoose";

const connectionString = "mongodb://localhost:27017/quizapp";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

export default mongoose;
