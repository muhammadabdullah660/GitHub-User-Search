import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchForm from "./Components/SearchForm/SearchForm";
import UserDetails from "./Components/UserDetails/UserDetails";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SearchForm />} />
          <Route exact path="/userdetails" element={<UserDetails />}></Route>
        </Routes>
      </Router>
      <div className="background">
        <div className="animation">
          <img
            src="https://img.icons8.com/ios-filled/250/github.png"
            alt="GitHub Logo"
            className="github-logo"
          />
        </div>
      </div>
    </>
  );
}

export default App;
