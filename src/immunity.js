import IMMUN from './immun_data';
import './App.css';
const IMMUNITY = () => {
    return (
        <div className="sym">
            <h1>Herb List &#127793;</h1>
            <h3>Immunity</h3>
            <div className="anx">
                {IMMUN.map((item) => (
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

export default IMMUNITY