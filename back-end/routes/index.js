var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var emailAddress = req.body.emailAddress;
  var phone = req.body.phone;
  var mobilePhone = req.body.mobilePhone;
  var rsvp = req.body.rsvp;
  var attendee1FirstName = req.body.attendee1FirstName;
  var attendee1LastName = req.body.attendee1LastName;
  var attendee1Meal = req.body.attendee1Meal;
  var attendee2FirstName = req.body.attendee2FirstName;
  var attendee2LastName = req.body.attendee2LastName;
  var attendee2Meal = req.body.attendee2Meal;
  var attendee3FirstName = req.body.attendee3FirstName;
  var attendee3LastName = req.body.attendee3LastName;
  var attendee3Meal = req.body.attendee3Meal;
  var attendee4FirstName = req.body.attendee4FirstName;
  var attendee4LastName = req.body.attendee4LastName;
  var attendee4Meal = req.body.attendee4Meal;
  var message = req.body.message;
  var content = `First Name: ${firstName} \n Last Name: ${lastName} \n Email Address: ${emailAddress} \n Phone: ${phone} \n Mobile Phone: ${mobilePhone} \n RSVP: ${rsvp} \n Attendee 1: ${attendee1FirstName} ${attendee1LastName}  Meal: ${attendee1Meal} \n Attendee 2: ${attendee2FirstName} ${attendee2LastName}  Meal: ${attendee2Meal} \n Attendee 3: ${attendee3FirstName} ${attendee3LastName}  Meal: ${attendee3Meal} \n Attendee 4: ${attendee4FirstName} ${attendee4LastName}  Meal: ${attendee4Meal} \n Message: ${message}`;
  var mail = {
    from: firstName,
    to: 'joseph.mielzarek@gmail.com',
    subject: 'New Wedding RSVP',
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
