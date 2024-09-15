import express from "express"
const router = express.Router();
import {addTopic ,displayToplic} from "../controllers/topicController.js";

router.post('/add-topic', addTopic);
router.get('/topic-list',displayToplic)

export default router