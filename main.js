const express = require('express');
const app = express();

const sendMail = require('./Controller/sendMail');

app.get('/',(req,res)=>{
    res.send('server');
});

app.get('/sendMail',sendMail)

const start = async () =>{
    try {
        app.listen(5000);
        
    } catch (err) {
        console.log(err);
    }
}
start();

// const mailer = require('nodemailer');

// const transport = mailer.createTransport({
//     service : 'gmail',
//     auth : {
//         user : 'joshihimanshu1403@gmail.com',
//         pass : 'joshi1403.com'
//     }
// })

// let messageObj = {
//     from : 'joshihimanshu1403@gmail.com',
//     to : 'joshihimanshu245@gmail.com',
//     subject : 'Email using NODE JS',
//     text : 'this mail is send using'
// }

// transport.sendMail(messageObj,(err, info)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(info.response);
//     }
// })