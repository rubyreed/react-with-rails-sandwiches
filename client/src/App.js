import Sandwiches from './components/Sandwiches';
import './App.css';
import {Route, Routes} from "react-router-dom";
import About from "./components/About";
import NavBar from "./components/NavBar";
import SandwichForm from './components/SandwichForm';

function App() {
  return (
    <div style = {styles.container} className="App">
      <NavBar />
      {/* <Sandwiches /> */}
      <Routes>
        <Route path = "/" element={<Sandwiches />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/sandwiches/new" element={<SandwichForm />} />
      </Routes>
    
    </div>
  );
};

 

const styles = {
  container: {
    border: "3px solid purple",
    margin: "5px",
    padding: "5px"
  }
}

export default App;
