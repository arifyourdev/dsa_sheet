import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  progress: [
    {
      topicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
      completedProblems: [mongoose.Schema.Types.ObjectId]
    }
  ]
});

 export default mongoose.model('User', UserSchema);
