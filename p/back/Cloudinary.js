// const cloudinary = require("cloudinary");

const mailer = require("nodemailer");

require('dotenv').config();

const Sendmail = async(content,nom,email) =>{
   try{
     const transporter = mailer.createTransport({
       service: "gmail",
       auth: {
         user: process.env.NODEMAILER_USER,
         pass : process.env.NODEMAILER_PASS
       }
     });
     const mailOptions = {
       from: email,
       to : "marwanelaksiouer@gmail.com",
       subject : nom,
       html : content,
     }
     const info = await transporter.sendMail(mailOptions);
   }
   catch(err){
     console.log(err);
   }
 }
 

module.exports = {Sendmail}




// cloudinary.config({
//    cloud_name: process.env.CLOUD_NAME,
//    api_key: process.env.API_KEY ,
//    api_secret: process.env.API_SECRET
// });

// const Uploadimgs = async(imgpath) =>{
//   try{
//    const data = await cloudinary.uploader.upload(imgpath,{
//       resource_type: 'auto',
//    });
//    return data;
//   }catch (err){
//    return err;
//   }
// }
// const Deleteimgs = async(imgId) =>{
//    try{
//     const destroy = await cloudinary.uploader.destroy(imgId);
//     return destroy;
//    }catch (err){
//     return err;
//    }
//  }

//  module.exports = {Uploadimgs,Deleteimgs}