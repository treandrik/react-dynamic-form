import React, { useState } from 'react';
import './Form.css';
import Inputs from './Inputs';


const Form = () => {
    const [resultState, setResultState] = useState([{}]);

    const [inputState, setInputState] = useState([]);

    const handleInputChange = (e) => {
        const updatedInputs = [...inputState];
        updatedInputs[e.target.dataset.idx]['text'] = e.target.value;
        updatedInputs[e.target.dataset.idx]['name'] = `Input ${parseInt(e.target.dataset.idx) + 1}`;
        setInputState(updatedInputs);
    };

    const handleRemoveInput = (index) => {
        const updatedInputs = [...inputState];
        updatedInputs.splice(index, 1);
        setInputState(updatedInputs);
    };

    const addInput = (type) => {
        const inputs = [...inputState];
        inputs.push({name: '', text: '', type: type});
        setInputState(inputs);
    }; 

    const handleSubmit = (event) => {
        setResultState(inputState);
        event.preventDefault();
    };

    return (
        <div className="container">
            <h2>Dynamic Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="inline-input-group">
                    <input
                        type="button"
                        value="Add New Input"
                        onClick={() => addInput('text')}
                    />
                    <input
                        type="button"
                        value="Add New TextArea"
                        onClick={() => addInput('textArea')}
                    />
                    <input
                        type="button"
                        value="Add New Date"
                        onClick={() => addInput('dateTime')}
                    />
                </div>
                {
                    inputState.map((val, idx) => (
                        <Inputs
                            key={`input-${idx}`}
                            idx={idx}
                            inputState={inputState}
                            handleInputChange={handleInputChange}
                            handleRemoveInput={handleRemoveInput}
                        />
                    ))
                }
                <input type="submit" value="Save" />
            </form>
            <div className="result-container">
                {
                    resultState.map((val, idx) => (
                        <div key={`input-${idx}`}>{val.name}:{val.text}</div>
                    ))
                }
            </div>
        </div>
    );
};

export default Form;