import express from "express";
import userControllers from "../controllers/usersController.js";

const router = express.Router(); 

router.post('/inscription', userControllers.createUser);
// router.get('/inscription', userControllers.getAllUsers);

export default router;
