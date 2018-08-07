var express = require('express');
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');
var xoauth2    = require('xoauth2');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {layout: false});
});

router.post('/send_mail',(req,res)=>{
  
  var subject = req.body.Subject;
  var from    = req.body.Email;
  var message = req.body.Message;

  var options = {
    viewEngine: {
        extname: '.hbs',
        layoutsDir: 'views/',
        defaultLayout : 'layout',
        partialsDir : 'views/partials/'
    },
    viewPath: 'views/',
    extName: '.hbs'
  };


  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{   
          user: 'eduvysupervision@gmail.com',
          pass:'Eduvy@123',
          clientId:'490182794397-i958cpolm0vkbr7gf8iovbuoa4akk7s2.apps.googleusercontent.com',
          clientSecret: 'WJQnKpJI0JiF9-NymqJI6msZ',
          refreshToken:'1/CsM4ORXQbm8Z4Fmpums905CCWwMV-OKC0vNH5pPAHL5nvC6J1i-QndxU26BR5bMn',
          accessToken:'ya29.GlvxBSEcNNmVLRTFFkZHnihd5W7vB7t-doeZTfbBD--9xTzmoHZi369BjrWKHV89Y6BWWD7R_X94_wsI7RfQX8UnXhLON34afwQs9PXCQVVH-GD2P5F40VOTWHjG'
    
    }
  });

  transporter.use('compile', hbs(options));

  const mailOptions = {
    from: from, // sender address
    to: 'mk6598951@gmail.com', // list of receivers  id 15082829077-c27hlmg5rt0o821nk9l7no8763j72d0f.apps.googleusercontent.com
    subject: subject, // Subject lin       seceret  9tuDKQHbnPZrzMkwXsaOu_zl
    template: 'email_body',
     context: {
          variable1 : 'value1',
          variable2 : 'value2'
    }
  }; 
  
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
      res.render('home', {layout: false});
  });
 
})

module.exports = router;
