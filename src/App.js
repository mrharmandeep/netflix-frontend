import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import SignInPage from '../src/pages/SignInPage';
import SignupPage from '../src/pages/SignupPage';
import WatchScreen from '../src/pages/WatchScreen';
import Homepage from '../src/pages/Homepage';
function App() {
  const user = false;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={user ? <Homepage /> : <Navigate to="/Signup" />} />
          <Route path="/Signup" element={!user ? <SignupPage /> : <Navigate to="/" />} />
          <Route path="/Signin" element={!user ? <SignInPage /> : <Navigate to="/" />} />
          {user && (
            <>
              <Route path="/Watch" element={<WatchScreen />} />
              
            </>
          )}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
