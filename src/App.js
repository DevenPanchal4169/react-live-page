import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/about" element={<>About</>} />
          <Route path="/contact" element={<>Contact</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
