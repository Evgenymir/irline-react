import React, { useEffect, useState } from 'react';
import Contacts from '../section/contacts/Contacts.jsx';
import ContactForm from '../../components/forms/ContactForm.jsx';
import './Contact.scss';
import sendingData from '../../assets/js/sendingData';
import ThanksBlock from '../../components/forms/thanksBlock.jsx';
import scrollPageTop from '../../assets/js/scrollPageTop';

const Contact = () => {
    const [sendForm, setSendForm] = useState(false);

    useEffect(() => {
        scrollPageTop();
    }, []);

    const handleSubmitForm = (values) => {
        const resultSending = sendingData(values);
        if (resultSending.status === 200) {
            setSendForm(true);
        }
    };

    return (
        <div className="page-wrapper contact-page">
            <Contacts disabledCallBackButton />
            <div className="contact-page__content">
                <div className="container">
                    <div className="contact-page__title">
                        Обратная связь
                    </div>
                    { !sendForm && <ContactForm onSubmit={handleSubmitForm} /> }
                    { sendForm && <ThanksBlock text="Спасибо за обращение! <br/> Наш менеджер свяжется с Вами." /> }
                </div>
            </div>
        </div>
    );
};

export default Contact;
