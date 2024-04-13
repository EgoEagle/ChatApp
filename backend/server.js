import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

const app = express();


dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req,res) => {
    // root route http://localhost:5000/
    res.send("Ready");
    
});

app.use("/api/auth", authRoutes)

console.log(PORT);
app.listen(PORT,() => console.log(`Running on ${PORT}`));