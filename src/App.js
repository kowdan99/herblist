import './App.css';
import Sym from "./components/symptom";
import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <h1>Herbs List &#127793;</h1>
      {/* <div className="wrapper">
        <div className="typing-demo">
          Herbs that help various symptoms...
        </div>
      </div> */}
      <p className="explanation">
        <small>Learn to bulletproof your body with different herbs for a specific symptom.</small>
      </p>
      <div className="form">
        <form className ="newsletter" action="https://jamform.com/f/uZpTmZse_Ay_YjSlPIjw7" method="POST">
          <input type="email" name="email" placeholder="Email Address"/>
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <p className="sp">
        <small>No spam. We promise.</small>
      </p>
      <CardDeck style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Row md={2}>
        <Col> <Sym symptom = "Anxiety/Depression"/></Col>
        <Col> <Sym symptom = "Immunity"/> </Col>
        <Col> <Sym symptom = "Heart Health"/> </Col>
        <Col> <Sym symptom = "Oral Health"/> </Col>
        </Row>
      </CardDeck>

      {/* <footer>
      <p>This Is Not Medical Advice.<br />
      
      <a
        className="builtby"
        href="https://twitter.com/ysf_k"
        target="_blank"
        rel="noopener noreferrer"
      >
        built by @ysf_k
      </a>
      </p>
      </footer> */}

      <Footer/>
    </div>
  );
}

export default App;
