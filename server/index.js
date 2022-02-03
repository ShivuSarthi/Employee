import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import route from "./route/route.js";
const app = express();

// enable files upload
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(express.static("upload"));

//Middleware
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// default route
app.use("/users", route);

const URL =
  "mongodb+srv://user:Shivu1999@cluster0.cqvaj.mongodb.net/EMPLOYEE?retryWrites=true&w=majority";

const PORT = 8000;

// Connected DB
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("mongodb Connected");
  })
  .catch((err) => {
    console.log("error", err.message);
  });

// Server call
app.listen(PORT, () => {
  console.log(`server is up and running at http://localhost:${PORT}`);
});
