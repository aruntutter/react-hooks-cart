// App.js
import React from "react";
import "./App.css";
import ParentComponent from "./components/constant/ParentComponent";

function App() {
  return (
    <div className="App">
      <ParentComponent /> {/* Render the ParentComponent */}
    </div>
  );
}

export default App;
