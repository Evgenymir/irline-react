import React from 'react';
import './Button.scss';

const Button = ({
    buttonType,
    isDisabled,
    link,
    text,
    additionalClasses,
}) => {
    if (buttonType === 'submit') {
        return (
            <button type="submit" className={`button ${additionalClasses}`} disabled={isDisabled}>{text}</button>
        );
    }
    return (
        <a href={link} className={`button ${additionalClasses}`}>{text}</a>
    );
};

export default Button;
