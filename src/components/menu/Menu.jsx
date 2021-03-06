import React from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';
import { NavLink } from 'react-router-dom';

const Menu = ({ menu }) => {
    if (menu === undefined) {
        return null;
    }

    return (
        <nav className="menu">
            <ul className="menu__list">
                {menu.map(({ id, title, link }) => (
                    <li className="menu__list-item" key={id}>
                        <NavLink
                            to={link}
                            className="menu__list-link"
                            activeClassName="is-active"
                        >
                            {title}
                        </NavLink>
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
