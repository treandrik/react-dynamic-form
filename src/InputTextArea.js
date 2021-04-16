import React from 'react';
import PropTypes from 'prop-types';

const InputTextArea = ({ idx, inputState, handleInputChange, handleRemoveInput }) => {
    const inputId = `name-${idx}`;
    return (
        <div className="form-input" key={`input-${idx}`}>
            <button
                  className="remove-button"
                  type="button"
                  onClick={()=>handleRemoveInput(idx)}
                >
                  Delete
            </button>
            <label htmlFor={inputId}>{`Input ${idx + 1}`}</label>
            <br/>
            <textarea
                name={inputId}
                data-idx={idx}
                id={inputId}
                className="text"
                value={inputState[idx].text}
                onChange={handleInputChange}
            />
        </div>
    );
};

InputTextArea.propTypes = {
    idx: PropTypes.number,
    inputState: PropTypes.array,
    handleInputChange: PropTypes.func,
    handleRemoveInput: PropTypes.func,
};

export default InputTextArea;