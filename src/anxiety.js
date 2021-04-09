import ANXDEP from './data';
import './App.css';
import Footer from './components/footer';
const Anx = () => {
    return (
        <div className="sym">
            <h1>Herbs List &#127793;</h1>
            <h3>Anxiety/Depression</h3>
            <div className="anx">
                {ANXDEP.map((item) => (
                    <div className="item" key={item.title}>
                    <a
                        className="link"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <b>{item.title}</b> 
                    </a>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    )
};

export default Anx