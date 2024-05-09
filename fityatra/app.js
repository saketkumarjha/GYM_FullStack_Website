import express from "express";
import { connectdb, connectLogindb } from "./db/connectdb.js";
import { join } from "path";
import web from "./routes/web.js";
const app = express();
const port = process.env.PORT || "3000";

const database_url = process.env.database_url || "mongodb://localhost:27017";
connectdb(database_url);

connectLogindb(database_url);

app.use(express.urlencoded({ extended: false }));

//stataics file
app.use("/student", express.static(join(process.cwd(), "assets")));
app.use("/student/edit", express.static(join(process.cwd(), "assets")));
app.use(express.static("assets"));

app.set("view engine", "ejs");
app.use("/", web);

//this static for loginpage
app.use(express.static("assets"));

// app.use("/", web);

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
