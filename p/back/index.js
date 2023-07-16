const express = require("express")
const app = express()
const http = require("http")
const mongoose = require("mongoose")
const cors = require("cors")
const {Sendmail} = require("./Cloudinary")
const server = http.createServer(app)
require("dotenv").config();
app.use(cors())
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
server.listen(process.env.PORT || 3009)










