import logo from './logo.svg';
import './App.css';
import WelcomeScreen from './Home/WelcomeScreen';
import FeatureList from './Home/FeatureList';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/FeatureList" element={<FeatureList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
