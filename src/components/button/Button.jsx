import React from 'react';
import './Button.scss';

const Button = ({ link, text, additionalClasses }) => (
    <a href={link} className={`button ${additionalClasses}`}>{text}</a>
);

export default Button;
