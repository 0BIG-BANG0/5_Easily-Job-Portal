import express from "express";
import path from "path";
import expressLayout from "express-ejs-layouts";
import jobRouter from "./src/routes/jobs.routes.js";
import applicantRouter from "./src/routes/applicant.routes.js";

//Create an instance of express app
const app = express();

//for static file like css
app.use(express.static("public"));

//BodyParser
app.use(express.urlencoded({ extended: true }));

//Setting up the view Engine (ejs in this case)
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));

//Using Express-ejs-Layout for Layout support
app.use(expressLayout);

//Serving static Files from 'src/views' directory
app.use(express.static("src/views"));

// Using the router for handling routes starting from "/"
app.use("/", jobRouter);
app.use("/", applicantRouter);

export default app;
