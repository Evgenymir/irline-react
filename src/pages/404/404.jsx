import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './404.scss';
import { connect } from 'react-redux';
import scrollPageTop from '../../assets/js/scrollPageTop';

const mapStateToProps = ({ initState }) => {
    const { page404 } = initState;

    return { page404 };
};
const Page404 = ({ page404 }) => {
    useEffect(() => {
        scrollPageTop();
    }, []);

    const {
        errorNumber, text, buttonUrl, buttonText,
    } = page404;

    return (
        <div className="page-wrapper page404">
            <div className="container">
                <div className="page404__title">
                    <span>{errorNumber}</span>
                    {text}
                </div>
                <Link to={buttonUrl} className="page404__button button button--red">{buttonText}</Link>
            </div>
        </div>
    );
};

Page404.defaultProps = {
    page404: {
        errorNumber: '404',
        text: 'Ошибка',
        buttonUrl: '/',
        buttonText: 'На главную',
    },
};

Page404.propTypes = {
    page404: PropTypes.objectOf(PropTypes.string),
};

export default connect(mapStateToProps)(Page404);
