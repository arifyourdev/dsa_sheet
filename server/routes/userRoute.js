import express from "express"
import {addUser ,loginUser} from "../controllers/userController.js";
const router = express.Router();

router.post('/add-user', addUser)
router.post('/login',loginUser)

export default router