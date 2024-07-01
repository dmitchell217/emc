const express = require('express');
const path = require('path');  // You missed this import
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static('src'));

app.get('/simulate-error', (req, res, next) => {
  throw new Error('Simulated server error');
});

// Catch-all route to handle requests without .html extension
app.get('*', (req, res, next) => {
  // Check if the request path has an extension (e.g. .css, .js)
  if (path.extname(req.path)) {
      return next(); // If it has an extension, skip and let express.static handle it
  }

  // Otherwise, try appending .html and serving that file
  const filePath = path.join(__dirname, 'src', req.path + '.html');
  res.sendFile(filePath, (err) => {
      // If there's an error (like file not found), send a 404
      if (err) {
          res.status(404).send('Not Found');
      }
  });
});

// 404 Not Found Middleware
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/src/404-page.html');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);  // Log the error stack trace
  if (err.status >= 500 && err.status < 600) {
      // If the error status code is between 500-599, redirect to 503 page
      res.status(503).sendFile(__dirname + '/src/503-page.html');
  } else {
      // For other errors, redirect to 404 page
      res.status(404).sendFile(__dirname + '/src/404-page.html');
  }
});

// TODO add secets 
// Use body-parser middleware to parse POST request data
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.post('/send-email', async (req, res) => {
//     const { name, email, phone, message, property } = req.body;

//     // Set up nodemailer transporter (Using Gmail for this example)
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'YOUR_EMAIL@gmail.com', // replace with your email
//             pass: 'YOUR_PASSWORD' // replace with your password
//         }
//     });

//     // Mail options
//     const mailOptions = {
//         from: email,
//         to: 'dmitchell217@gmail.com',
//         subject: 'New Inquiry from ' + name + 'for' + property,
//         text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProperty: ${property}\n\nMessage:\n${message}`
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.send('Email sent!');
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).send('Failed to send email.');
//     }
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});