// App.js
import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ParentComponent from "./components/constant/ParentComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ParentComponent /> {/* Render the ParentComponent */}
    </div>
  );
}

export default App;
