import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Privacy-policy.scss';
import { connect } from 'react-redux';
import scrollPageTop from '../../assets/js/scrollPageTop';

const mapStateToProps = ({ initState }) => {
    const { privacyPolicy } = initState;

    if (!privacyPolicy) {
        return {
            title: '',
            text: '',
        };
    }

    return {
        title: privacyPolicy.title,
        text: privacyPolicy.text,
    };
};

const PrivacyPolicy = ({ title, text }) => {
    useEffect(() => {
        scrollPageTop();
    }, []);

    return (
        <div className="page-wrapper privacy-policy">
            <div className="container">
                <div className="privacy-policy__title">{title}</div>
                <div className="privacy-policy__content" dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </div>
    );
};

PrivacyPolicy.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(PrivacyPolicy);
