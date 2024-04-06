const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/input', async (req, res) => {
  const { inputValue } = req.body;
  console.log('Received input from front end:', inputValue);
  
  try {
    // Send the received input to the Microsoft Copilot API (hypothetical example)
    const response = await axios.post('https://api.microsoft.com/copilot/v1/completions', {
      prompt: inputValue,
      max_tokens: 100,
      // Add any other necessary parameters
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_MICROSOFT_API_KEY', // Replace with your Microsoft API key
      },
    });

    // Extract the generated text from the response
    const generatedText = response.data.generatedText.trim();
    console.log('Generated text:', generatedText);

    // Send the generated text back to the front end
    res.status(200).json({ message: 'Input received and processed successfully', generatedText });
  } catch (error) {
    console.error('Error processing input:', error.message);
    res.status(500).json({ error: 'Failed to process input' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
