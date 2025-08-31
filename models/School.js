import mongoose from "mongoose";

const SchoolSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  contact: String,
  email_id: String,
  image: String,
});

export default mongoose.models.School || mongoose.model("School", SchoolSchema);
