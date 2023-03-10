import StudnetModel from "../models/student.js"
class StudentC{
    static crateDoc = async (req,res) =>
    {
        try {
            const {name,age,fees}=req.body
            const doc=new StudnetModel({
                name:name,
                age:age,
                fees:fees

            })
            //saving document
            const result=await doc.save()
            console.log(result);
             res.redirect('/student')
        } catch (error) {
         console.log(error);   
        }
    }
    
    static editDoc = async (req,res)=>
    {
        try {
            const result=await StudnetModel.findById(req.params.id)
            console.log(result);
            res.render("edit",{data:result})
        } catch (error) {
            console.log(error);
        }
        
        
    }

    static getAllDoc =async (req,res)=>
    {
        try{
            const result= await StudnetModel.find()
        
        res.render("index",{data: result})
        }catch(error)
        {
            console.log(error);
        }
    }
    static updateDocById = async (req,res)=>
    {

        try {
            const result = await StudnetModel.findByIdAndUpdate(req.params.id,req.body);
            console.log(result);

        } catch (error) {
            console.log(error);
        }        
        res.redirect("/student")
    }

    static deleteDoc= async (req,res)=>
    {
        try {
            const result=await StudnetModel.findByIdAndDelete(req.params.id)
            res.redirect("/student")
        } catch (error) {
            console.log(error);
        }
        
    }

}

export default StudentC;