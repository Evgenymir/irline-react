import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Footer.scss';

const mapStateToProps = ({ initState }) => {
    const { footer, copyright } = initState;
    return {
        menuItems: footer,
        copyright,
    };
};

const Footer = ({ menuItems, copyright }) => (
    <footer className="footer">
        <div className="container">
            <div className="footer__content">
                { menuItems.map(({ title, items }) => (
                    <div className="footer__item" key={title}>
                        <div className="footer__item-title">{title}</div>
                        <ul>
                            { items.map(({ text, link }) => (
                                <li key={text}>
                                    <Link to={link}>{text}</Link>
                                </li>
                            )) }
                        </ul>
                    </div>
                )) }
                <div className="footer__item">
                    <div className="footer__item-copy">
                        <p>{copyright.year}</p>
                        <p>{copyright.text}</p>
                        <Link to={copyright.link.href} className="footer__item-policy">
                            {copyright.link.text}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

Footer.defaultProps = {
    menuItems: [],
    copyright: {
        year: 'не указан год',
        text: 'Все права защищены.',
        link: {
            text: 'Нет текста',
            href: '#',
        },
    },
};

Footer.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            link: PropTypes.string,
        })),
    })),
    copyright: PropTypes.shape({
        year: PropTypes.string,
        text: PropTypes.string,
        link: PropTypes.shape({
            text: PropTypes.string,
            href: PropTypes.string,
        }),
    }),
};

export default connect(mapStateToProps)(Footer);
