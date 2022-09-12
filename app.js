const express = require('express');
var bodyParser = require('body-parser');
const app = express();
// const expressValidator = require('express-validator')

// const path = require('path')
 
const nodemailer = require('nodemailer')
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/public', express.static('public'))

app.get('/' , (req, res) => {
    res.sendFile('index.html' , { root : __dirname });
});

app.post('/contactSubmit',(req,res)=>{
    console.log(req.body)
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // type: OAuth2,
        user: S_USER,
        pass: S_PASS
        }
    })
 
    const mailOptions = {
        from: S_USER,
        to: S_END, 
        subject: `New Enquiry:${req.body.name}`,
        html:`<h1>New Contact Enquiry - Website</h1>
        <h2> name: ${req.body.name} </h2><br>
        <h2> email: ${req.body.mail} </h2><br>
        <h2> phonenumber: ${req.body.telephone} </h2><br>
        <h2> message: ${req.body.message} </h2><br>`
    };


    transporter.sendMail(mailOptions, (err, info) => {
        if (err){
        console.log(err);
        res.send('error')
        }
        else {
        console.log(info);
        res.send('Sent successfully')
        }
    })
});

 app.listen(port, () => console.log('listening on port 3000'));