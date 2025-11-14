import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
       {alert && <Alert alert={alert} />}

        <div className="container my-3"></div>

        <Routes>
          <Route  exact path="/about" element={<About mode={Mode} />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading=" Try TextUtils- Word Counter, Character Counter, Remove extra spaces" mode={Mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
