import Sandwiches from './components/Sandwiches'
import './App.css';

function App() {
  return (
    <div style = {styles.container} className="App">
    <Sandwiches />
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
