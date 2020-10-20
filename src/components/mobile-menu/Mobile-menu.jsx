import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Button from '../button/Button.jsx';
import phoneWithoutSpaces from '../../assets/js/phoneWithoutSpaces';
import { closeMobileMenu } from '../../actions/index';
import './Mobile-menu.scss';

const mapStateToProps = ({ initState }) => {
    const {
        menuItems, callBack, order, phone,
    } = initState;
    return {
        menuItems,
        callBack,
        order,
        phone,
    };
};

const MobileMenu = ({
    menuItems, callBack, order, phone, dispatch,
}) => {
    const [showMenu, setShowMenu] = useState(false);
    const body = document.querySelector('body');

    useEffect(() => {
        body.classList.add('is-scroll-blocked');
        setShowMenu(true);
    }, []);

    const handleCloseMenu = () => {
        setShowMenu(false);
        setTimeout(() => {
            body.classList.remove('is-scroll-blocked');
            dispatch(closeMobileMenu());
        }, 300);
    };

    return (
        <CSSTransition
            in={showMenu}
            timeout={300}
            classNames="mobile-menu-animation"
        >
            <div className="mobile-menu-wrapper">
                <div className="mobile-menu">
                    <div className="mobile-menu__close" onClick={handleCloseMenu}>
                        <div className="mobile-menu__close-line" />
                        <div className="mobile-menu__close-line" />
                    </div>
                    <ul className="mobile-menu__list">
                        { menuItems.map(({ id, title, link }) => (
                            <li className="mobile-menu__list-item" key={id}>
                                <a href={link} className="mobile-menu__list-link">
                                    {title}
                                </a>
                            </li>
                        )) }
                    </ul>
                    <div className="mobile-menu__links">
                        <Button link={callBack.link} text={callBack.name} additionalClasses="mobile-menu__button button--red" />
                        <a href={`tel:${phoneWithoutSpaces(phone)}`} className="mobile-menu__link-phone">{phone}</a>
                        <Button link={order.link} text={order.name} additionalClasses="mobile-menu__button button--red" />
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

MobileMenu.defaultProps = {
    callBack: {
        name: 'Кнопка',
        link: 'callBack',
    },
    order: {
        name: 'Кнопка',
        link: 'order',
    },
    phone: 'Телефон',
    menuItems: [{
        id: 0,
        title: 'Пример',
        link: '#',
    }],
};

MobileMenu.propTypes = {
    callBack: PropTypes.objectOf(PropTypes.string),
    order: PropTypes.objectOf(PropTypes.string),
    phone: PropTypes.string,
    menuItems: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(MobileMenu);
