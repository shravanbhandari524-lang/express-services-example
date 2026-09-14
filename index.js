import express from "express";

import pool from "./01_config/postgres.config.js";
import initDB from "./999_scripts/dbInit.js";
import handlePgError from "./99_middleware/globalPgErrorHandler.js";
await initDB();
const app = express();
app.use("/", async (req, res, next) => {
  try {
    const result = await pool.query("select * from student");
    console.log(result);
    res.send("hello");
  } catch (err) {
    next(err);
  }
});
app.use(handlePgError);
app.listen(8080, () => {
  console.log("Server started");
});
