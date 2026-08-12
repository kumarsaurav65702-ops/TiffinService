import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Food title is required"],
      trim: true,
      unique: true,
      minlength: [2, "Title must be at least 2 characters"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters"],
      maxlength: [500, "Description cannot exceed 500 characters"],
    },

    foodType: {
      type: String,
      required: [true, "Food type is required"],
      enum: ["Veg", "Non-Veg"],
    },

    mealType: {
      type: String,
      required: [true, "Meal type is required"],
      enum: ["Breakfast", "Lunch", "Dinner", "Snacks", "Beverage"],
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [1, "Price must be greater than 0"],
    },

    image: {
      url: {
        type: String,
        required: [true, "Image URL is required"],
        trim: true,
      },

      fileId: {
        type: String,
        required: [true, "Image File ID is required"],
        trim: true,
      },
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
foodSchema.index({ title: 1 });
foodSchema.index({ foodType: 1 });
foodSchema.index({ mealType: 1 });
foodSchema.index({ isFeatured: 1 });

const Food = mongoose.model("Food", foodSchema);

export default Food;