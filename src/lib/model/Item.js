// filepath: c:\Users\HE DIDI IT\Documents\build\decor-web-app\src\models\Item.js
import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  jobName: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

export default mongoose.models.Item || mongoose.model("Item", ItemSchema);