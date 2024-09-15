import mongoose from "mongoose";

const TopicModel = new mongoose.Schema({
  topic: String,
});

export default mongoose.model('Topic', TopicModel);
