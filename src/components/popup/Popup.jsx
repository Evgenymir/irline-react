import React from 'react';
import './Popup.scss';
import CallBackForm from '../forms/CallBackForm.jsx';

const Popup = () => {
    const closePopup = () => {
        console.log(1111);
    };
    return (
        <div className="popup-wrapper">
            <div className="popup">
                <button type="button" className="popup__close" onClick={closePopup}>
                    <span className="popup__close-line" />
                    <span className="popup__close-line" />
                </button>
                <div className="popup__title">Обратный звонок</div>
                <CallBackForm />
            </div>
        </div>
    );
};

export default Popup;
