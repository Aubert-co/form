import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import './Input.css'

function Input({name, label, ...rest}) {
    const inputRef = useRef(null)
    const { fieldName, registerField, error } = useField(name);

   
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        });
    }, [fieldName, registerField]);
    return (
        <div className="form-container">
          <div>
           {label && <label htmlFor={fieldName}>{label}</label>}
          </div>
          <div className="input">
          <input ref={inputRef} id={fieldName} {...rest}/>
          </div>
          <div>
          { error && <span className="error">{error}</span> }
          </div>
        </div>      
    )
}

export default Input;




