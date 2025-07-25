// require('dotenv').config({path: './env'})
import dotenv from "dotenv"    
import  connectDB from "./db/data.js";


dotenv.config({            
    path:'./env'
})

connectDB();

/* 1, approach to connect database
(async () => {      //effi function ';' is for surity for avoiding error to next

  try {     // for checking the database connected or not
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) =>{
        console.log("ERRR:",error);
        throw error
    })
    
    app.listen(process.env.PORT,() => {
        console.log(`App is listening on port ${process.env.PORT}`);
    })

  } catch (error) {                           
    console.error("ERROR: ", error);
    throw error;
  }

})(); 
*/