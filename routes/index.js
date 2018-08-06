var express = require('express');
var nodemailer = require('nodemailer');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {layout: false});
});

router.post('/send_mail',(req,res)=>{
  console.log(req.body);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
          user: 'mk6598951@gmail.com',
          pass: 'Nitp@12345'
      }
   });

  const mailOptions = {
    from: 'mk6598951@gmail.com', // sender address
    to: 'ravikumarfiitjee@gmail.com', // list of receivers
    subject: 'Subject of your email', // Subject lin
    html: '<p>Your html here</p>'// plain text body
  }; 
  
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
  });
})

module.exports = router;
