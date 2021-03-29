import './App.css';
import Sym from "./components/symptom";
import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function App() {
  return (
    <div className="App">
      <h1>Herbs List &#127793;</h1>
      <div className="wrapper">
        <div className="typing-demo">
          Herbs that help various symptoms...
        </div>
      </div>
      <CardDeck style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Row md={2}>
        <Col> <Sym symptom = "Anxiety/Depression"/></Col>
        <Col> <Sym symptom = "Immunity"/> </Col>
        <Col> <Sym symptom = "Heart Health"/> </Col>
        <Col> <Sym symptom = "Oral Health"/> </Col>
        </Row>
      </CardDeck>

      <footer>
      <p>This Is Not Medical Advice. 
      
      <a
        className="builtby"
        href="https://twitter.com/ysf_k"
        target="_blank"
        rel="noopener noreferrer"
      >
        built by @ysf_k
      </a>
      </p>
      </footer>
    </div>
  );
}

export default App;
