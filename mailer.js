import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';



dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors());

app.post('/submit-contact-form', (req, res) => {
    const { firstName, lastName, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT),
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });
  
    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `New Contact Form Submission - ${subject}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send('Error sending contact form email: ' + error.message);
      }
      res.status(200).send('Contact form email sent: ' + info.response);
    });
  });

app.post('/submit-booking-form', (req, res) => {
  const { fullName, contactInfo, date, numberOfPassengers, destinationFrom, destinationTo } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT),
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: 'Booking Inquiry Form Submission',
    text: `Full Name: ${fullName}\nContact Info: ${contactInfo}\nDate: ${date}\nNumber of Passengers: ${numberOfPassengers}\nDestination From: ${destinationFrom}\nDestination To: ${destinationTo}`,
    html: `
      <h2>Booking Inquiry Form Submission</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Contact Info:</strong> ${contactInfo}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Number of Passengers:</strong> ${numberOfPassengers}</p>
      <p><strong>Destination From:</strong> ${destinationFrom}</p>
      <p><strong>Destination To:</strong> ${destinationTo}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email: ' + error.message);
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Start the Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
