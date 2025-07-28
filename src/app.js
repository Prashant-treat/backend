import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
//middleware
app.use(express.json({limit:"16kb"})); //parses incoming resquest with json payload (handle json data via fetch)
app.use(express.urlencoded({extented:true,limit:"16kb"})); //parses incoming json payload (handing form data)
app.use(express.static("public"))//to static file on own server
app.use(cookieParser())

export {app}