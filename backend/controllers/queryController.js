import Query from "../models/Query.js";

// Submit Query
export const submitQuery = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      query,
    } = req.body;

    // Required fields validation
    if (!name || !email || !phone || !query) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Create Query
    const newQuery = await Query.create({
      name,
      email,
      phone,
      query,
    });

    res.status(201).json({
      success: true,
      message: "Query submitted successfully",
      query: newQuery,
    });
  } catch (error) {
    console.error("Submit Query Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get All Queries - Admin Only
export const getQueries = async (req, res) => {
  try {
    const queries = await Query.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: queries.length,
      queries,
    });
  } catch (error) {
    console.error("Get Queries Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Update Query Status - Admin Only
export const updateQueryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required",
      });
    }

    if (!["Pending", "Resolved"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    // Find query
    const query = await Query.findById(id);

    if (!query) {
      return res.status(404).json({
        success: false,
        message: "Query not found",
      });
    }

    // Update status
    query.status = status;

    await query.save();

    res.status(200).json({
      success: true,
      message: "Query status updated successfully",
      query,
    });
  } catch (error) {
    console.error("Update Query Status Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
