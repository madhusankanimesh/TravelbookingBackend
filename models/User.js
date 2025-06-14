import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // remove extra whitespace
    },
    email: {
      type: String,
      required: true,
      unique: true, // no duplicate emails
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["tourist", "admin", "hotel-owner", "transport-owner"],
      default: "tourist",
    },
    otp: String,
    otpExpiry: Date,
    
    provider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },
    googleId: {
      // store Google sub
      type: String,
      unique: true,
      sparse: true,
    },
    photo: String,
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

export default mongoose.model("User", userSchema);
