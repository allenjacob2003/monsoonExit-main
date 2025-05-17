import mongoose from "mongoose";
export const connectDB = async () => {
//Write missing code here
mongoose
  .connect(
    'mongodb+srv://allenjacobofficial2003:1928@cluster0.cxvgyaz.mongodb.net/Blogapp?retryWrites=true&w=majority&appName=Cluster0'
   
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
}
