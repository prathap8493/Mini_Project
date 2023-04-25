import {BrowserRouter as Router} from "react-router-dom";
import AnimatesRoute from "./components/AnimatesRoute";
import Navbar from './components/Navbar/Navbar';
import "./App.css"

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <AnimatesRoute />
    </Router>
    </>
  );
}

export default App;

