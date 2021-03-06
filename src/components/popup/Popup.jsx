import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Popup.scss';
import { CSSTransition } from 'react-transition-group';
import CallBackForm from '../forms/CallBackForm.jsx';
import OrderForm from '../forms/OrderForm.jsx';
import { closePopupForm } from '../../actions/index';
import sendingData from '../../assets/js/sendingData';
import ThanksBlock from '../forms/thanksBlock.jsx';

const Popup = ({ formName, title, dispatch }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [sendForm, setSendForm] = useState(false);
    const body = document.querySelector('body');

    useEffect(() => {
        body.classList.add('is-scroll-blocked');
        setShowPopup(true);
    }, []);

    const handleSubmitForm = (values) => {
        const resultSending = sendingData(values);
        if (resultSending.status === 200) {
            setSendForm(true);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
        setTimeout(() => {
            body.classList.remove('is-scroll-blocked');
            dispatch(closePopupForm());
        }, 300);
    };

    const renderForms = {
        callBack: <CallBackForm onSubmit={handleSubmitForm} />,
        order: <OrderForm onSubmit={handleSubmitForm} />,
        thanks: <ThanksBlock text="Спасибо за заявку! <br/> Наш менеджер свяжется с Вами." cb={closePopup} />,
    };

    return (
        <CSSTransition
            in={showPopup}
            timeout={300}
            classNames="popup-animation"
        >
            <div className="popup-wrapper">
                <div className="popup">
                    <button type="button" className="popup__close" onClick={closePopup}>
                        <span className="popup__close-line" />
                        <span className="popup__close-line" />
                    </button>
                    <div className="popup__title">{title}</div>
                    { !sendForm ? renderForms[formName] : renderForms.thanks }
                </div>
            </div>
        </CSSTransition>
    );
};

Popup.propTypes = {
    formName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Popup);
