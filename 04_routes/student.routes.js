import express from "express";
import * as student from "../03_controllers/student.controller.js";
const router = express.Router();
router.get("/test", (req, res) => {
  return res.send("hit student api");
});
router.get("/all", student.getAll);
router.get("/:id", student.getById);
router.post("/", student.create);
router.put("/:id", student.update);
router.delete("/:id", student.remove);
export default router;
