import express from "express";
import studentController from "../controller/studentController.js";
import { homeController } from "../controller/homeController.js";

const router = express.Router();

router.get("/student/", studentController.getAllDoc);
router.post("/student/", studentController.createDoc);
router.post("/student/edit/:id", studentController.editDoc);
router.post("/student/update/:id", studentController.updateDocById);
router.post("/student/delete/:id", studentController.deleteDocById);
router.get("/", homeController);

export default router;
