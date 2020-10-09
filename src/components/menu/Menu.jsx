import React from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';

const Menu = ({ menu }) => {
    if (menu === undefined) {
        return null;
    }

    return (
        <nav className="menu">
            <ul className="menu__list">
                {menu.map(({ id, title, link }) => (
                    <li className="menu__item-0" key={id}>
                        <a href={link} className="menu__link-0">{title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Menu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    })).isRequired,
};

export default Menu;
