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
