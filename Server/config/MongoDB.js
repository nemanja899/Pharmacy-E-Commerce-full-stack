import mongoose from "mongoose";

const connectDatabase = async ()=>{
    try {
        const connection =  mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Database is connected");
    } catch (error) {
        console.error(error.message);
    }
};

export default connectDatabase;