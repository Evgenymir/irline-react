import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button.jsx';

const ThanksBlock = ({ text, cb }) => (
    <div className="form-thanks">
        <div className="form-thanks__text" dangerouslySetInnerHTML={{ __html: text }} />
        <Button
            cb={cb}
            buttonType="button"
            additionalClasses="form__button button--red"
            text="Закрыть"
        />
    </div>
);

ThanksBlock.propTypes = {
    text: PropTypes.string.isRequired,
    cb: PropTypes.func.isRequired,
};

export default ThanksBlock;
