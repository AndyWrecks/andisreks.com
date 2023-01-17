require("dotenv").config();
import express, { Express, Request, Response } from "express";
import * as bodyParser from "body-parser";
const cors = require("cors");

const app: Express = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require("./routes/api/post");
const mediaLog = require("./routes/api/media-log");

app.use("/api/post", posts);
app.use("/api/media-log", mediaLog);

// Handle production
if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public/"));

  // Handle SPA
  app.get(/.*/, (req: Request, res: Response) =>
    res.sendFile(__dirname + "/public/index.html")
  );
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
