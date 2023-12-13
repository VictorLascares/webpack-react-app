import { useState } from "react";

const App = () => {
    const [counter, setCounter] = useState(0);
    const [values, setValues] = useState("")

    const handleClick = () => {
        setCounter(counter + 1);
        setValues(values.concat(counter));
    }

    return (
        <>
            <h1>Hola Mundo desde App</h1>
            <button onClick={handleClick}>
                press this!
            </button>
            <div>
                { counter }
            </div>
        </>
        
    );
}

export default App;