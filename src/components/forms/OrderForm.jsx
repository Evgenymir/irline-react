import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import Button from '../button/Button.jsx';
import maskPhone from '../../assets/js/maskPhone';
import { required, phoneLength, email } from '../../assets/js/formValidate';
import './Form.scss';
import Input from '../formControls/Input.jsx';

const mapStateToProps = (state) => {
    const form = state.form.orderForm;
    if (form === undefined) {
        return {};
    }
    const hasErrors = form.syncErrors;

    return {
        errors: hasErrors,
    };
};

const OrderForm = ({ handleSubmit, invalid }) => (
    <form onSubmit={handleSubmit} className="form">
        <Field
            name="name"
            component={Input}
            type="text"
            validate={[required]}
            placeholder="ФИО"
        />
        <Field
            name="phone"
            component={Input}
            type="tel"
            validate={[required, phoneLength]}
            placeholder="Телефон"
            {...maskPhone}
        />
        <Field
            name="email"
            component={Input}
            type="email"
            validate={[required, email]}
            placeholder="Email"
        />
        <Button
            buttonType="submit"
            additionalClasses="form__button button--red"
            text="Заказать"
            isDisabled={invalid}
        />
    </form>
);

OrderForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
};

const ConnectedForm = connect(mapStateToProps)(OrderForm);

export default reduxForm({
    form: 'orderForm',
})(ConnectedForm);
