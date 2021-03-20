import mongoose from "mongoose";

const connectionString = process.env.DB_HOST;
console.log("mostrando db", connectionString);

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

export default mongoose;
