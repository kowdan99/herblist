import ANXDEP from './data';
import './App.css';
const Anx = () => {
    return (
        <div className="sym">
            <h1>Herb List &#127793;</h1>
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
        </div>
    )
};

export default Anx