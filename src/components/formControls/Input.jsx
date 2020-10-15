import React from 'react';
import './Input.scss';

const Input = ({ input, meta, ...props }) => {
    return (
        <div className="field">
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <input {...input} {...props} className="field__input" />
            { meta.touched && meta.error && <span className="field__error">{meta.error}</span> }
        </div>
    );
};

export default Input;
