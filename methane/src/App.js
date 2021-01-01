import React from  "react"
import './App.css';
import { Routes } from './Routes/Routes';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import CardDetails from './Components/CardDetails/CardDetails'
import StartFundraiser from "./Components/StartFundraiser/StartFundraiser";
import NewFundRaiserPage from "./Components/StartFundraiser/NewFundRaiserPage";

function App() {
  return (
    <div className="App">
      {/* <Routes/> */}
      {/* <CardDetails/> */}
      {/* <StartFundraiser/> */}
      <NewFundRaiserPage/>
    </div>
  );
}

export default App;
