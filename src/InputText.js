import React from 'react';
import PropTypes from 'prop-types';

const inputText = ({ idx, inputState, handleInputChange, handleRemoveInput }) => {
    const inputId = `name-${idx}`;
    return (
        <div className="form-input" key={`input-${idx}`}>
            <label htmlFor={inputId}>{`Input ${idx + 1}`}</label>
            <button
                  className="remove-button"
                  type="button"
                  onClick={()=>handleRemoveInput(idx)}
                >
                  Delete
            </button>
            <input
                type="text"
                name={inputState[idx].name}
                data-idx={idx}
                id={inputId}
                className="text"
                value={inputState[idx].text}
                onChange={handleInputChange}
            />
        </div>
    );
};

inputText.propTypes = {
    idx: PropTypes.number,
    inputState: PropTypes.array,
    handleInputChange: PropTypes.func,
    handleRemoveInput: PropTypes.func,
};

export default inputText;