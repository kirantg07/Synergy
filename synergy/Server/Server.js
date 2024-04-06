import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { post } from 'axios';

const app = express();

app.use(cors());
app.use(json());

app.post('/input', async (req, res) => {
  const { inputValue } = req.body;
  console.log('Received input from front end:', inputValue);
  
  try {
    // Send the received input to the Microsoft Copilot API (hypothetical example)
    const response = await post('https://api.microsoft.com/copilot/v1/completions', {
      prompt: inputValue,
      max_tokens: 100,
      // Add any other necessary parameters
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ', // Replace with your Microsoft API key
      },
    });

    // Extract the generated text from the response
    const generatedText = response.data.generatedText.trim();
    console.log('Generated text:', generatedText);

    // Redirect to the FeatureList page along with the generated text as a query parameter
    res.redirect(`/Home/FeatureList?generatedText=${encodeURIComponent(generatedText)}`);
  } catch (error) {
    console.error('Error processing input:', error.message);
    res.status(500).json({ error: 'Failed to process input' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
