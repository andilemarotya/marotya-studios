const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Choose a port for your server

app.use(bodyParser.json());

app.post('/subscribe', async (req, res) => {
  try {
    // Make a request to Mailchimp API using your API key
    const response = await axios.post(
      'https://us21.api.mailchimp.com/3.0/lists/81de093c5e/members',
      {
        email_address: req.body.email,
        status: 'subscribed',
      },
      {
        headers: {
          Authorization: 'Bearer 2044741c07a27d268da78db9423f6843-us21', // Replace with your Mailchimp API key
        },
      }
    );

    res.json({ success: true, message: 'Subscribed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Subscription failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
