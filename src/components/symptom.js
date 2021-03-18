import Card from 'react-bootstrap/Card';
import './cards.css'
import { Button } from 'react-bootstrap';
import Anx from '../anxiety';
import { Link } from 'react-router';


const Sym = ({symptom}) => {
    // const history = useHistory();

    // const handleClick = (event) => {
    //     history.push("../anxiety");
    // }

    let link = "";

    if(symptom === "Anxiety/Depression") {
        link = "anxiety";
    } else if(symptom === "Immunity") {
        link = "immunity";
    }

    let result = "../" + link;
    //console.log(result)
    return (
        <Card className="customCard" style={{ width: '10rem'}} >
            <Card.Body>
                <Card.Text className="cardText">
                 {symptom}
                </Card.Text>
                <Card.Link className="cardLink" href={result}>Learn More</Card.Link>
            </Card.Body>
        </Card>
    )
};

export default Sym