import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/HomePage/HomePage';
import { DonatePage } from './Components/DonatePage/DonatePage';
import CardDetails from './Components/CardDetails.jsx/CardDetails';
import Routes from './Routes/Routes';
import Pricing from './Components/Pricing/Pricing';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}

      {/* <Routes/> */}
      <CardDetails/>
      {/* <HomePage/> */}
      {/* <DonatePage/> */}
      {/* <Pricing/> */}
      <Footer/>
    </div>
  );
}

export default App;
