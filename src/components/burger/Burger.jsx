import React from 'react';
import PropTypes from 'prop-types';
import './Burger.scss';

const Burger = ({ openMenu }) => (
    <div className="burger" onClick={openMenu}>
        <div className="burger__line" />
        <div className="burger__line" />
        <div className="burger__line" />
    </div>
);

Burger.propTypes = {
    openMenu: PropTypes.func.isRequired,
};

export default Burger;
