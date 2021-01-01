import React from  "react"
import './App.css';
import { Routes } from './Routes/Routes';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import CardDetails from './Components/CardDetails/CardDetails'

function App() {
  return (
    <div className="App">
      <Routes/>
      {/* <CardDetails/> */}
    </div>
  );
}

export default App;
