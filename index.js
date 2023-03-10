import express from 'express'
import connectDB from './db/connectDb.js';
const app = express()
const port = 3000;
import {join} from 'path'
import router  from './routes/web.js';
router
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017";


app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs');


//static files
app.use(express.static(join(process.cwd(),"public")))
app.use('/student/edit',express.static(join(process.cwd(),"public")))

//databse connection
connectDB(DATABASE_URL);

app.use('/student',router)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
