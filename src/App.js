import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchForm from "./Components/SearchForm";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SearchForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
