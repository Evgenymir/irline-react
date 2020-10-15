import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Button from '../button/Button.jsx';
import maskPhone from '../../assets/js/maskPhone';
import { required, phoneLength } from '../../assets/js/formValidate';
import './Form.scss';
import Input from '../formControls/Input.jsx';
import sendingData from '../../assets/js/sendingData';

const mapStateToProps = (state) => {
    const form = state.form.callBackForm;
    if (form === undefined) {
        return {};
    }
    const hasErrors = state.form.callBackForm.syncErrors;

    return {
        errors: hasErrors,
    };
};

class CallBackForm extends React.Component {
    submitHandler = (values) => {
        const { reset } = this.props;
        const data = {
            data: values,
            reset,
        };
        sendingData(data);
    };

    render() {
        const { handleSubmit, invalid } = this.props;

        return (
            <form onSubmit={handleSubmit(this.submitHandler)} className="form">
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
                <Button
                    buttonType="submit"
                    additionalClasses="form__button button--red"
                    text="Заказать"
                    isDisabled={invalid}
                />
            </form>
        );
    }
}

const ConnectedForm = connect(mapStateToProps)(CallBackForm);

export default reduxForm({
    form: 'callBackForm',
})(ConnectedForm);
