import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { connect } from 'react-redux';
import Menu from '../../components/menu/Menu.jsx';
import Burger from '../../components/burger/Burger.jsx';
import Button from '../../components/button/Button.jsx';
import Logo from '../../components/logo/Logo.jsx';

const mapStateToProps = ({ initState }) => {
    const { logo, header, menuItems } = initState;
    return {
        logo,
        header,
        menuItems,
    };
};

const Header = ({ logo, header, menuItems }) => {
    const { callBack, order, phone } = header;
    const phoneWithoutSpaces = phone.split('').map((item) => item.trim()).join('');

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isScroll = window.pageYOffset >= 70;
            setScroll(isScroll);
        });
    }, [scroll]);

    return (
        <header className={`header ${scroll ? 'is-scroll' : ''}`}>
            <div className="container">
                <div className="header__wrap">
                    <div className="header__left">
                        <Logo img={!scroll ? logo.white : logo.grey} />
                        <Menu menu={menuItems} />
                        <Burger />
                    </div>
                    <div className="header__right">
                        <Button link="#callBack" text={callBack} additionalClasses="header__callBack" />
                        <a href={`tel:${phoneWithoutSpaces}`} className="header__phone">{phone}</a>
                        <Button link="#order" text={order} additionalClasses="header__order button--red" />
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
    header: {
        callBack: 'Кнопка',
        order: 'Кнопка',
        phone: 'Телефон',
    },
    menuItems: [{
        id: 0,
        title: 'Пример',
        link: '#',
    }],
};

Header.propTypes = {
    logo: PropTypes.shape({
        white: PropTypes.string,
        grey: PropTypes.string,
    }),
    header: PropTypes.shape({
        callBack: PropTypes.string,
        order: PropTypes.string,
        phone: PropTypes.string,
    }),
    menuItems: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(Header);
