import HEART_DATA from './heart_data';
import './App.css';
const HEART = () => {
    return (
        <div className="sym">
            <h1>Herbs List &#127793;</h1>
            <h3>Heart Health</h3>
            <div className="anx">
                {HEART_DATA.map((item) => (
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

export default HEART