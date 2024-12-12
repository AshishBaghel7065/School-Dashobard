import facultyModel from "../model/faculty.model.js";

export const facultyController = async (req, res) => {
  try {
    const {
      name,
      age,
      qualification,
      description,
      specialization,
      department,
      joiningDate,
      email,
      phone
    } = req.body;

    // Check for missing required fields
    if (
      !name ||
      !age ||
      !department||
      !specialization ||
      !department ||
      !phone||
      !email
    ) {
      return res.status(400).json({
        message: "Missing required details",
        success: false, // Updated for error
      });
    }

    // Create a new faculty document
    const faculty = await facultyModel.create({
      name,
      age,
      qualification,
      description,
      specialization,
      department,
      joiningDate,
      phone,
      email
    });

    return res.status(201).json({
      message: "New faculty added successfully",
      success: true,
      data: faculty, 
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while adding the faculty",
      success: false,
      error: error.message, 
    });
  }
};


export const getAllFaculty = async (req, res) => {
  try {
    const facultyList = await facultyModel.find(); // Fetch all faculty records from the database
    res.status(200).json({
      success: true,
      data: facultyList,
      message: 'Faculty records retrieved successfully',
    });
  } catch (error) {
    console.error('Error fetching faculty:', error.message);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching faculty records',
    });
  }
};
