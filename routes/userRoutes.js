import express from "express";
import { userDetails, userLogin } from "../controller/userController.js";
import validation from "../middleware/validation.js";

const router = express.Router();

router.route("/").get(userDetails).post(validation, userLogin);

export default router;
