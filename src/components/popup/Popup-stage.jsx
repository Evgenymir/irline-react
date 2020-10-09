import React from 'react';
import './Popup-stage.scss';
import { connect } from 'react-redux';
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
    const closePopup = () => {
        dispatch(stagesOfCooperationClosePopup());
    };

    return (
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
    );
};

export default connect(mapStateToProps)(PopupStage);
