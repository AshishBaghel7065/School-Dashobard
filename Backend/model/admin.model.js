import mongoose from "mongoose";

const { Schema } = mongoose;

const AdminSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } 
);

export default mongoose.model("Admin", AdminSchema);
