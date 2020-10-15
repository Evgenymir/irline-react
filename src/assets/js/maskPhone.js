import { createTextMask } from 'redux-form-input-masks';

const maskPhone = createTextMask({
    pattern: '+7 (999) 999-99-99',
    guide: false,
    allowEmpty: true,
});

export default maskPhone;
