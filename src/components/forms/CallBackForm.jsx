import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import Button from '../button/Button.jsx';
import maskPhone from '../../assets/js/maskPhone';
import { required, phoneLength } from '../../assets/js/formValidate';
import CustomField from '../formControls/CustomField.jsx';
import './Form.scss';

const mapStateToProps = ({ form }) => {
    const { callBackForm } = form;
    if (callBackForm === undefined) {
        return {};
    }
    const hasErrors = callBackForm.syncErrors;

    return {
        errors: hasErrors,
    };
};

const CallBackForm = ({ handleSubmit, invalid }) => (
    <form onSubmit={handleSubmit} className="form">
        <Field
            name="name"
            component={CustomField}
            type="text"
            validate={[required]}
            placeholder="ФИО"
        />
        <Field
            name="phone"
            component={CustomField}
            type="tel"
            validate={[required, phoneLength]}
            placeholder="Телефон"
            {...maskPhone}
        />
        <Button
            buttonType="submit"
            additionalClasses="form__button button--red"
            text="Заказать"
            isDisabled={invalid}
        />
    </form>
);

CallBackForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
};

const ConnectedForm = connect(mapStateToProps)(CallBackForm);

export default reduxForm({
    form: 'callBackForm',
})(ConnectedForm);
