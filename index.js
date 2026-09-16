import express from "express";
import studenRouter from "./04_routes/student.routes.js";
import initDB from "./999_scripts/dbInit.js";
import handlePgError from "./99_middleware/globalPgErrorHandler.js";
await initDB();
const app = express();
app.use("/status", (req, res) => {
  return res.json({ isGood: true });
});
app.use("/student", studenRouter);
app.use(handlePgError);
app.listen(8080, () => {
  console.log("Server started");
});
