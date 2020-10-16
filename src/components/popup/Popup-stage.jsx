import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Popup-stage.scss';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { stagesOfCooperationClosePopup } from '../../actions';

const mapStateToProps = ({ initState }) => {
    const { stagesOfCooperation } = initState;
    return {
        data: stagesOfCooperation,
    };
};

const PopupStage = ({
    title, content, img, dispatch,
}) => {
    const [isActivePopup, setIsActivePopup] = useState(false);
    const body = document.querySelector('body');

    useEffect(() => {
        body.classList.add('is-scroll-blocked');
        setIsActivePopup(true);
    }, []);

    const closePopup = () => {
        setIsActivePopup(false);
        setTimeout(() => {
            body.classList.remove('is-scroll-blocked');
            dispatch(stagesOfCooperationClosePopup());
        }, 300);
    };

    return (
        <CSSTransition
            in={isActivePopup}
            timeout={300}
            unmountOnExit
            classNames="popup-stage-animation"
        >
            <div className="popup-stage-wrapper">
                <div className="popup-stage">
                    <button type="button" className="popup-stage__close" onClick={closePopup}>
                        <span className="popup-stage__close-line" />
                        <span className="popup-stage__close-line" />
                    </button>
                    <div className="title">{title}</div>
                    <div className="popup-stage__content">
                        <div className="popup-stage__img">
                            <img src={img} alt={title} />
                        </div>
                        <div className="popup-stage__text" dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

PopupStage.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PopupStage);
