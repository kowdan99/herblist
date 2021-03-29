import ORAL_DATA from './oral_data';
import './App.css';
const ORAL = () => {
    return (
        <div className="sym">
            <h1>Herbs List &#127793;</h1>
            <h3>Oral Health</h3>
            <div className="anx">
                {ORAL_DATA.map((item) => (
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

export default ORAL