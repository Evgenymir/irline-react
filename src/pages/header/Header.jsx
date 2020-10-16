import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { connect } from 'react-redux';
import Menu from '../../components/menu/Menu.jsx';
import Burger from '../../components/burger/Burger.jsx';
import Button from '../../components/button/Button.jsx';
import Logo from '../../components/logo/Logo.jsx';
import phoneWithoutSpaces from '../../assets/js/phoneWithoutSpaces';
import { openMobileMenu } from '../../actions/index';

const mapStateToProps = ({ initState }) => {
    const {
        logo, phone, callBack, order, menuItems,
    } = initState;

    return {
        logo,
        phone,
        callBack,
        order,
        menuItems,
    };
};

const Header = ({
    logo, callBack, order, phone, menuItems, dispatch,
}) => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isScroll = window.pageYOffset >= 70;
            setScroll(isScroll);
        });
    }, [scroll]);

    const handleOpenMobileMenu = () => {
        dispatch(openMobileMenu());
    };

    return (
        <header className={`header ${scroll ? 'is-scroll' : ''}`}>
            <div className="container">
                <div className="header__wrap">
                    <div className="header__left">
                        <Logo img={!scroll ? logo.white : logo.grey} />
                        <Menu menu={menuItems} />
                        <Burger openMenu={handleOpenMobileMenu} />
                    </div>
                    <div className="header__right">
                        <Button link={callBack.link} text={callBack.name} additionalClasses="header__callBack" />
                        <a href={`tel:${phoneWithoutSpaces(phone)}`} className="header__phone">{phone}</a>
                        <Button link={order.link} text={order.name} additionalClasses="header__order button--red" />
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.defaultProps = {
    logo: {
        white: './img/logo.png',
        grey: './img/logoGrey.png',
    },
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

Header.propTypes = {
    logo: PropTypes.objectOf(PropTypes.string),
    callBack: PropTypes.objectOf(PropTypes.string),
    order: PropTypes.objectOf(PropTypes.string),
    phone: PropTypes.string,
    menuItems: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Header);
