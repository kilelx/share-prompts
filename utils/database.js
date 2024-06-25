import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    // avoid an error in the console
    mongoose.set('strictQuery', true)

    // Check if we are connected
    if(isConnected) {
        console.log('MongoDB is connected');
        // leave the function
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // config for connexion
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;
        console.log("MongoDB connected");
    } catch (err) {
        console.log('Error : ', err);
    }
}