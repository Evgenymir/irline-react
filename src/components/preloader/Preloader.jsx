import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Preloader.scss';
import { CSSTransition } from 'react-transition-group';

const Preloader = ({ show }) => {
    const [showPreloader, setShowPreloader] = useState(false);
    const body = document.querySelector('body');

    useEffect(() => {
        if (show) {
            body.classList.add('is-scroll-blocked');
            setShowPreloader(true);
        } else {
            setTimeout(() => {
                body.classList.remove('is-scroll-blocked');
                setShowPreloader(false);
            }, 1000);
        }
    }, [show]);

    return (
        <CSSTransition
            in={showPreloader}
            timeout={300}
            unmountOnExit
            classNames="preloader-animation"
        >
            <div className="preloader">
                <div className="preloader__circle" />
            </div>
        </CSSTransition>
    );
};

Preloader.propTypes = {
    show: PropTypes.bool.isRequired,
};

export default Preloader;
