import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connectedDB");
            }
            catch(error){
                console.log("DataBase Connection Failed");
                console.error(error.message);


                process.exit(1)
            }
}

export default connectDB;