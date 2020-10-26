import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';
import { Link } from 'react-router-dom';

const Logo = ({ img }) => (
    <div className="logo">
        <Link to="/" className="logo__link">
            <img src={img} alt="Logo" />
        </Link>
    </div>
);

Logo.propTypes = {
    img: PropTypes.string.isRequired,
};

export default Logo;
