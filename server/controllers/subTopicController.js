import SubTopicModel from "../models/SubTopicModel.js"

export const AddSubTopic = async (req, res) => {
    try {
        const { topicId, problem, youtublink, leadcode, article, level } = req.body;
        const addSubtopic = SubTopicModel({ topicId, problem, youtublink, leadcode, article, level })
        addSubtopic.save();
        res.status(200).send({ status: true, msg: 'Data Added', data: addSubtopic })
    } catch (e) {
        res.status(500).send({ status: false, msg: 'Error in code' })
    }
}


export const getTopicWiseList = async (req, res) => {
    try {
        const { topicId } = req.params;
        if (!topicId) {
            return res.status(400).send({ status: false, msg: "Topic ID is required" });
        }
        const subtopics = await SubTopicModel.find({ topicId })
        if (subtopics.length === 0) {
            return res.status(404).send({ status: false, msg: "No subtopics found for the given topic" });
        }
        res.status(200).send({ status: true, msg: "Subtopics fetched successfully", data: subtopics });
    } catch (e) {
        res.status(500).send({ status: true, msg: "Error in Code" })
    }
}