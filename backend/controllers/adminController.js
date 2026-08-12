import Admin from "../models/Admin.js";
import generateToken from "../utils/generateToken.js";

export const loginAdmin = async (req, res) => {
    try{
        const {email, password} = req.body;
        
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Email and Password required"
            })
        }

        const admin = await Admin.findOne({email}).select("+password");

        if(!admin){
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            })
        }

        const isMatch = await admin.comparePassword(password);

        if(!isMatch){
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            })
        }


        const token = generateToken(admin._id);

        res.status(200).json({
            success: true,
            message: "Login Successfull",
            token,
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
            },
        });
    }
    catch(error){
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}