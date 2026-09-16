import express from "express";
import * as teacher from "../03_controllers/teacher.controller.js";
const router = express.Router();
router.get("/test", (req, res) => {
  return res.send("hit student api");
});
router.get("/all", teacher.getAll);
router.get("/:id", teacher.getById);
router.post("/", teacher.create);
router.put("/:id", teacher.update);
router.delete("/:id", teacher.remove);
export default router;
