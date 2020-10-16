import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ input, meta, ...props }) => (
    <div className="field">
        <input {...input} {...props} className="field__input" />
        { meta.touched && meta.error && <span className="field__error">{meta.error}</span> }
    </div>
);

Input.propTypes = {
    input: PropTypes.objectOf(PropTypes.any).isRequired,
    meta: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Input;
