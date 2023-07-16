const express = require("express")
const app = express()
// const Message = require("./Models/Messages")
const http = require("http")
const mongoose = require("mongoose")
const cors = require("cors")
const {Sendmail} = require("./Cloudinary")
// const model = require("./Models/Users")
// const multer = require("multer")
// const path = require ("path") 
// const {Uploadimgs,Deleteimgs} = require("./Cloudinary")
const server = http.createServer(app)
// const { Server } = require("socket.io");
require("dotenv").config();

// const io = new Server(server,{
//   cors: { 
//     origin: "http://localhost:3000"
//   }
// });
app.use(cors())
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./upload");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({storage});


app.use(express.json())

mongoose.connect(process.env.DB_CONNECTER)

function apiKeyAuth(req, res, next) {
  const apiKey = req.headers['api-key'];
  if (!apiKey || apiKey != process.env.NODE_ENV_API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

app.post("/send",apiKeyAuth,async(req,res)=>{
  const {email,nom,content} = await req.body
  const Sending = await Sendmail(email,nom,content);
})
// app.get("/users", apiKeyAuth ,async(req,res)=>{
//    const users = await model.find();
//    res.json(users)
// })
// app.post("/createusers", apiKeyAuth ,upload.single("ProfilePicture") , async(req,res)=>{
//    const {Name,Email,Password,id} = req.body;
//    const ProfilePicture = req.file.filename;
//    const imgpath = path.join(__dirname,`./upload/${ProfilePicture}`);
//    const uploading = await Uploadimgs(imgpath)
//    const addnewuser = new model({
//            Name : Name,
//            Email : Email,
//            Password : Password,
//            ProfilePicture : uploading.secure_url,
//            id : id
// });
//    addnewuser.save()
// })

// io.on('connection', (socket) => {
//   console.log('User connected:', socket.id); 

//   socket.on('message', (data) => {
//     console.log('Message:', data);
//     const message = new Message({ 
//       sender: data.sender,
//       recipient:data.recipientId,
//       text: data.text  
//       });
//     message.save()
//       .then(() => {
//         console.log('Message saved:', message);
//           io.emit('message', data);
//       })
//       .catch((error) => {
//         console.error('Error saving message:', error);
//       });
//   });
// });
// app.get("/messages",apiKeyAuth ,async (req, res) => {
//   try { 
//     const messages = await Message.find();
//     res.json(messages);
//   } catch (error) {
//     console.error('Error fetching messages:', error);
//     res.status(500).json({ error: 'Failed to fetch messages' });
//   }
// }); 
 

server.listen(process.env.PORT || 3009)










