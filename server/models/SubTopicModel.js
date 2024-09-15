import mongoose from "mongoose";

const SubTopicModel = new mongoose.Schema({
    topicId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Topic'
    },
    problem:String,
    youtublink:String,
    leadcode:String,
    article:String,
    level:String
})

export default mongoose.model('SubTopic', SubTopicModel)