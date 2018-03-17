require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , axios = require('axios')
    , nodemailer = require('nodemailer');

const app = express();
app.use( express.static( `${__dirname}/../build` ) );
app.use(cors());
app.use(bodyParser.json())

app.post('/sendEmail', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.EMAIL_PASS
        }
    });
    var mailOptions = {
        from: req.body.from,
        to: process.env.MY_EMAIL,
        subject: req.body.subject,
        text: `${req.body.name} --- ${req.body.from} --- ${req.body.subject} --- ${req.body.text}`
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.json({ yo: 'error' });
        } else {
            console.log('Message Sent: ' + info.response);
            res.json({
                yo: info.response,
                complete: "Message Sent"
            })
        }
    })
})

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, `${__dirname}/../build/index.html`));
});

const { SERVER_PORT } = process.env
app.listen(SERVER_PORT, () => {
    console.log(`I'm listening on port: ${SERVER_PORT}`)
});