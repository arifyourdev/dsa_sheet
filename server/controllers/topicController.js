import TopicModel from "../models/TopicModel.js";

export const addTopic = async(req,res)=>{
    try{
        const {topic} = req.body;
        const add_topic = new TopicModel({topic:topic});
        await add_topic.save()
        res.status(200).send({status:true,msg:'Topic Addded'})

    }catch(e){
        res.status(400).send({status:false,msg:'Error in Code'})
    }
}

export const displayToplic = async (req,res) =>{
    try{

        const topicList = await TopicModel.find();
        res.status(200).send({
            status:true,
            msg:"category Lists",
            topicList

        })


    }catch(e){
        res.status(500).send({status:false,msg:"Error in Code"})
    }
}