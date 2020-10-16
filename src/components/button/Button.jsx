import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import { connect } from 'react-redux';
import { openPopupForm } from '../../actions/index';

const Button = ({
    buttonType,
    isDisabled,
    link,
    text,
    additionalClasses,
    cb,
    dispatch,
}) => {
    const setDataForOpenPopup = (name) => (e) => {
        e.preventDefault();
        dispatch(openPopupForm(name));
    };

    if (buttonType === 'submit') {
        return (
            <button type="submit" className={`button ${additionalClasses}`} disabled={isDisabled}>{text}</button>
        );
    }

    if (buttonType === 'button') {
        return (
            <button type="button" className={`button ${additionalClasses}`} onClick={cb}>{text}</button>
        );
    }

    return (
        <a href={link} className={`button ${additionalClasses}`} onClick={setDataForOpenPopup(link)}>{text}</a>
    );
};

Button.defaultProps = {
    buttonType: '',
    isDisabled: null,
    cb: () => {},
    link: '',
};

Button.propTypes = {
    buttonType: PropTypes.string,
    isDisabled: PropTypes.bool,
    link: PropTypes.string,
    text: PropTypes.string.isRequired,
    additionalClasses: PropTypes.string.isRequired,
    cb: PropTypes.func,
    dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Button);
