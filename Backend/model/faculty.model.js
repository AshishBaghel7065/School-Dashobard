import mongoose from "mongoose";

const { Schema } = mongoose;

const facultySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
    },
    qualification: {
      type: String,
      default: "Not Specified",
      trim: true,
    },
    description: {
      type: String,
      default: "No description provided",
      trim: true,
    },
    specialization: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      default: "",
      required: true,
    },
    joiningDate: {
      type: Date,
      default: Date.now,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/.+@.+\..+/, "Please provide a valid email address"],
    },
    phone: {
      type: String,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Faculty", facultySchema);
