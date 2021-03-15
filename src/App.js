import './App.css';
import Sym from "./components/symptom";
import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
        <Row md={2}>
        <Col> <Sym symptom = "Anxiety and Depression"/></Col>
        <Col> <Sym symptom = "Immunity"/> </Col>
        <Col> <Sym symptom = "Gut Health"/> </Col>
        </Row>
      </CardDeck>
    </div>
  );
}

export default App;
