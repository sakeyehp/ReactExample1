import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [ counter, setCounter ] = useState(0)

    return (
        <div>
            <div>{counter}</div>
            <div>
            <button onClick={() => setCounter(counter + 1)}>
                plus
            </button>
            </div>
            <div>
            <button onClick={() => setCounter(0)}>
                reset
            </button>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))