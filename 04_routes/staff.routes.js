import express from "express";
import * as staff from "../03_controllers/staff.controller.js";
const router = express.Router();
router.get("/test", (req, res) => {
  return res.send("hit staff api");
});
router.get("/all", staff.getAll);
router.get("/:id", staff.getById);
router.post("/", staff.create);
router.put("/:id", staff.update);
router.delete("/:id", staff.remove);
export default router;
