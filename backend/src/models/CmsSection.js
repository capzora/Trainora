import mongoose from "mongoose";

const CmsSectionSchema = new mongoose.Schema({
  key: { type: String, unique: true }, 
  content: mongoose.Schema.Types.Mixed 
}, { timestamps: true });

export default mongoose.model("CmsSection", CmsSectionSchema);
