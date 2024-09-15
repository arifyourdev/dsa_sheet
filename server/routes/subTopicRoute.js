import express from "express";
import { AddSubTopic ,getTopicWiseList} from "../controllers/subTopicController.js";
const router = express.Router();

router.post('/add-subtopic', AddSubTopic)
router.get('/get-subtopic/:topicId',getTopicWiseList)
export default router