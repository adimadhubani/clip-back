import express from "express"
import dotenv from "dotenv"
import colors from "colors";
import cors from "cors"
import connectDB from "./config/db.js";
import clipboardRoutes from "./routes/clipboardRoutes.js"
import path from "path"


dotenv.config();

connectDB();

const app=express();
console.log(process.env.MONGODB_URI)

const PORT = process.env.PORT || 5001;
const __dirname=path.resolve();
app.use(express.json());
app.use(cors({
  origin: [
    'https://clip-back.onrender.com',
    'http://localhost:5173/'
  ]
}));
  
  
  app.use('/api/clipboard', clipboardRoutes);
  app.use(express.static(path.join(__dirname, '../../frontend/dist')));

  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
  // });







app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`.bgCyan.white);
})
