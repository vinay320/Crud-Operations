import mongoose from "mongoose";

//define schema

const studentSchema =new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:18,max:60},
    fees:{type:mongoose.Decimal128,required:true,validate:(v)=> v>5000.5},
    
})

//Model

const StudnetModel =mongoose.model("student",studentSchema)

export default StudnetModel