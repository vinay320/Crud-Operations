import mongoose from 'mongoose'
const connectDB=async (DATABASE_URL)=>{
  try {
    // Database connection string
    const DB_OPTIONS=
    {
        dbName:"School",
    };

    // Connect to MongoDB
    await mongoose.connect(DATABASE_URL,DB_OPTIONS);
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error.message);
  }
};
export default connectDB;