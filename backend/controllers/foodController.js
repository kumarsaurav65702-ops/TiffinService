import Food from "../models/Food.js";
import imagekit from "../config/imagekit.js";

export const addFood = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      foodType,
      mealType,
      featured,
      rating,
    } = req.body;

    // Required fields validation
    if (
      !title ||
      !description ||
      !price ||
      !foodType ||
      !mealType
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Image validation
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Food image is required",
      });
    }

    // Check duplicate food
    const existingFood = await Food.findOne({ title });

    if (existingFood) {
      return res.status(400).json({
        success: false,
        message: "Food already exists",
      });
    }

    // Upload image to ImageKit
    const uploadResponse = await imagekit.upload({
      file: req.file.buffer,
      fileName: `${Date.now()}-${req.file.originalname}`,
      folder: "/tiffin-service/foods",
    });

    // Create food
    const food = await Food.create({
      title,
      description,
      price,
      foodType,
      mealType,
      image: {
        fileId: uploadResponse.fileId,
        url: uploadResponse.url,
      },
      featured: featured === "true" || featured === true,
      rating: rating ? Number(rating) : 0,
    });

    res.status(201).json({
      success: true,
      message: "Food added successfully",
      food,
    });


  } catch (error) {
    console.error("Add Food Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }



};

//get foods
export const getFoods = async (req, res) => {
  try {
    const foods = await Food.find({
      isAvailable: true,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: foods.length,
      foods,
    })
  }
  catch (error) {
    console.error("Get Foods Error:", error)
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    })
  }
}

//Update Food
export const updateFood = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      description,
      price,
      foodType,
      mealType,
      rating,
      isFeatured,
      isAvailable,
    } = req.body;

    //Find food
    const food = await Food.findById(id);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food not found"
      })
    }

    //Update only provided fields
    if (title !== undefined) food.title = title;
    if (description !== undefined) food.description = description;
    if (price !== undefined) food.price = Number(price);
    if (foodType !== undefined) food.foodType = foodType;
    if (mealType !== undefined) food.mealType = mealType;
    if (rating !== undefined) food.rating = Number(rating);

    if(isFeatured !== undefined){
      food.isFeatured =
      isFeatured === true || isFeatured === "true";
    }

    if( isAvailable !== undefined) {
      food.isAvailable = 
      isAvailable === true || isAvailable === "true";
    }

    await food.save();

    res.status(200).json({
      success: true,
      message: "Food Updated Successfully",
      food,
    })

  }
  catch (error) {
      console.error("Update Food Error", error)

      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      })
  }
}



// Delete Food
export const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;

    const food = await Food.findById(id);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    // Delete image from ImageKit
    if (food.image?.fileId) {
      await imagekit.deleteFile(food.image.fileId);
    }

    // Delete food from database
    await Food.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Food deleted successfully",
    });
  } catch (error) {
    console.error("Delete Food Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};