require("dotenv").config()
const cors = require('cors');
const express = require("express");
const nodeMailer = require("nodemailer");
const app = express();
app.use(express.json());
app.use(express.static("src"));
const inventory = require('./inventory.js');
const stripe = require("stripe")([process.env.STRIPE_PRIVATE_KEY])
const url = process.env.CLIENT_URL;


app.use(cors({
    origin:"https://grayscale-five.vercel.app",// Allow frontend to access the backend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    credentials: true, // Allow cookies and credentials (optional)
}));



app.post("/api/submit",async (req,res) => {
    try{ 
        const body = req.body[0];
        const quantities = req.body[1]
        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            line_items:body.map((element)=>{
                const storeItem = element;
                return {
                    price_data:{
                        currency:"usd",
                        product_data:{
                            name:element.title   
                        },
                        unit_amount:element.price * 100,
                        
                    },
                    
                    quantity:quantities[element.indexOf]
                }
    
            }),
            mode:"payment",
            success_url:process.env.SUCCESS_URL,
            cancel_url:process.env.FAILURE_URL
        })
    
        let totalAmountCents = 0
        body.forEach((element,)=>{
            inventory.forEach(ele=>{
                if(element.indexOf === ele.indexOf){
                    totalAmountCents += element.price 
                }
            })
        });
        totalAmountCents *= 100;
        
    
        res.status(200).json({url:session.url})}catch(e){
            res.status(500).json({error:e.message})
            console.log(e)
        }
   
})

app.post("/api/sendEmail",async (req,res) => {
    try{ 
        const {name, surname,email , subject, message} = req.body
        if (!name || !surname || !email || !subject || !message)
        {
            return res.status(400).json({ error: "All fields are required." });
        }
        
        const transporter = nodeMailer.createTransport({
            service:"gmail",
            host: "smtp.gmail.email",
            port: 465,
            secure: true, // true for port 465, false for other p
            auth:{
                user:process.env.EMAIL_ADDRESS,
                pass:process.env.EMAIL_KEY

            }
        })

        const mailOptions = {
            from:`${email}`,
            to:"junaindavidsvickerman@gmail.com",
            subject:subject,
            text:message
        }
       
        const info = await transporter.sendMail(mailOptions)
        
        //console.log("Email sent:" + info.response);
        
        res.status(200).json(
        {
            emailSent:true}
        )}catch(e){
            
            res.status(500).json({
                error: false,
              });
        }
   
})

app.post("/api/newsLetter",async (req,res) => {
    try{ 
        const {email} = req.body
        const subject = "Subscribing to newsletter"
        const message = "Thank you for subscribing to the newslettter"
        const transporter = nodeMailer.createTransport({
            service:"gmail",
            host: "smtp.gmail.email",
            port: 465,
            secure: true, // true for port 465, false for other p
            auth:{
                user:process.env.EMAIL_ADDRESS,
                pass:process.env.EMAIL_KEY

            }
        })

        const mailOptions = {
            from:`junain@greyscale.com`,
            to:`${email}`,
            subject:subject,
            text:message
        }
       
        const info = await transporter.sendMail(mailOptions)
        
        
        res.status(200).json(
        {
            emailSent:true}
        )}catch(e){
            
            res.status(500).json({
                error: false,
              });
        }
   
})

app.listen(5000,()=>{
    console.log("server is running 5000")
}
);