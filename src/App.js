import './App.css';
import Sym from "./components/symptom";
import CardDeck from 'react-bootstrap/CardDeck';

function App() {
  return (
    <div className="App">
      <h1>Herb List &#127793;</h1>
      <div className="wrapper">
        <div className="typing-demo">
          Herbs that cure various symptoms...
        </div>
      </div>
      <CardDeck style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Sym symptom = "Anxiety and Depression"/>
        <Sym symptom = "Immunity"/>
      </CardDeck>
    </div>
  );
}

export default App;
