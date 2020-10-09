import React from 'react';
import './Popup-stage.scss';

const PopupStage = ({
    closePopup,
    content,
    img,
    title,
}) => (
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

export default PopupStage;
