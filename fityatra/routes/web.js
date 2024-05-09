import express from "express";
import studentController from "../controller/studentController.js";
import { homeController } from "../controller/homeController.js";
import userController from "../controller/userController.js";

const router = express.Router();

router.get("/student/", studentController.getAllDoc);
router.post("/student/", studentController.createDoc);
router.post("/student/edit/:id", studentController.editDoc);
router.post("/student/update/:id", studentController.updateDocById);
router.post("/student/delete/:id", studentController.deleteDocById);
router.get("/", homeController);

router.get("/signin/", userController.home);
router.get("/signin/registration", userController.registration);
router.post("/signin/registration", userController.createUserDoc);
router.get("/signin/login", userController.login);
router.post("/signin/login", userController.verification);

export default router;
