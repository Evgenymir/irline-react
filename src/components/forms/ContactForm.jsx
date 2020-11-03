import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import CustomField from '../formControls/CustomField.jsx';
import { email, phoneLength, required } from '../../assets/js/formValidate';
import maskPhone from '../../assets/js/maskPhone';
import Button from '../button/Button.jsx';

const mapStateToProps = ({ form }) => {
    const { contactForm } = form;

    if (contactForm === undefined) {
        return {};
    }

    const hasErrors = contactForm.syncErrors;

    return {
        errors: hasErrors,
    };
};

const ContactForm = ({ handleSubmit, invalid }) => (
    <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form__left">
            <Field
                name="name"
                component={CustomField}
                type="text"
                validate={[required]}
                placeholder="ФИО"
            />
            <Field
                name="email"
                component={CustomField}
                type="email"
                validate={[required, email]}
                placeholder="Email"
            />
            <Field
                name="phone"
                component={CustomField}
                type="tel"
                validate={[required, phoneLength]}
                placeholder="Телефон"
                {...maskPhone}
            />
        </div>
        <div className="contact-form__right">
            <Field
                name="message"
                component={CustomField}
                validate={[required]}
                placeholder="Сообщение"
            />
        </div>
        <div className="contact-form__bottom">
            <Button
                buttonType="submit"
                additionalClasses="contact-form__button button--red"
                text="Заказать"
                isDisabled={invalid}
            />
        </div>
    </form>
);

ContactForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
};

const connectedForm = connect(mapStateToProps)(ContactForm);

export default reduxForm({
    form: 'contactForm',
})(connectedForm);
