import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import InputTextArea from './InputTextArea';
import InputDate from './InputDate';

const Inputs = ({ idx, inputState, handleInputChange, handleRemoveInput }) => {
    let input;
    if (inputState[idx].type === 'text') {
        input = <InputText 
            key={`input-${idx}`}
            idx={idx}
            inputState={inputState}
            handleInputChange={handleInputChange}
            handleRemoveInput={handleRemoveInput} 
        />;
    } else if (inputState[idx].type === 'textArea') {
        input = <InputTextArea
            key={`input-${idx}`}
            idx={idx}
            inputState={inputState}
            handleInputChange={handleInputChange} 
            handleRemoveInput={handleRemoveInput} 
        />;
    } else if (inputState[idx].type === 'dateTime') {
        input = <InputDate
            key={`input-${idx}`}
            idx={idx}
            inputState={inputState}
            handleInputChange={handleInputChange} 
            handleRemoveInput={handleRemoveInput} 
        />;
    }
    
    return (
        input
    );
};

Inputs.propTypes = {
    idx: PropTypes.number,
    inputState: PropTypes.array,
    handleInputChange: PropTypes.func,
    handleRemoveInput: PropTypes.func,
};

export default Inputs;