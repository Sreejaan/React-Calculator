import { useState } from "react";
import Calculator from './Calculator.jsx';
import './index.css';

function App(){
    const [toogle, setToggle] = useState(false);

    return (
        <div className={toogle ? 'appDark': 'app'}>
            <button onClick={() => setToggle(!toogle)} className="toggle-theme">
                {toogle ? '☀️ Light' : '🌙 Dark'}
            </button>
            <Calculator/>
        </div>
    );
}

export default App;
