import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <HomePage/>
    </div>
  );
}

export default App;
