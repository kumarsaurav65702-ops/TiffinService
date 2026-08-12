import mongoose from "mongoose";
import validator from "validator";

const querySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: "Please enter a valid email address",
      },
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },

    query: {
      type: String,
      required: [true, "Query is required"],
      trim: true,
      minlength: [5, "Query must be at least 5 characters"],
      maxlength: [1000, "Query cannot exceed 1000 characters"],
    },

    status: {
      type: String,
      enum: ["Pending", "Resolved"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Query = mongoose.model("Query", querySchema);

export default Query;