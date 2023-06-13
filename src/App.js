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
    </>
  );
}

export default App;
