import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';

const Logo = ({ img }) => (
    <div className="logo">
        <a href="/" className="logo__link">
            <img src={img} alt="Logo" />
        </a>
    </div>
);

Logo.propTypes = {
    img: PropTypes.string.isRequired,
};

export default Logo;
