import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate(); // Access navigate function from useNavigate hook

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to backend
      const response = await fetch('http://localhost:5000/input', {  // Assuming backend server is running locally on port 5000
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ inputValue }),
});

      
      // Check if data was successfully sent to backend
      if (response.ok) {
        // Redirect to FeatureList page upon successful submission
        navigate(`/Home/FeatureList?inputValue=${inputValue}`);
      } else {
        // Handle error if data submission fails
        console.error('Failed to submit data to backend');
      }
    } catch (error) {
      // Handle any network errors
      console.error('Error:', error);
    }
  };

  return (
    <div className="welcome-screen">
      <img src="https://tse2.mm.bing.net/th?id=OIP.KtPeJw_3PEU8FLlfn4vwcwHaEo&pid=Api&P=0&h=180" alt="App Development" />
      <div>
        <h1>Welcome to the Home Page</h1>
        <form onSubmit={handleSubmit} className="input-form">
          <textarea
            placeholder="Enter text..."
            value={inputValue}
            onChange={handleInputChange}
            rows="5"
          ></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default WelcomeScreen;
