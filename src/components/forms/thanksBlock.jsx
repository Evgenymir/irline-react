import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button.jsx';

const ThanksBlock = ({ text, cb }) => {
    console.log(cb);
    return (
        <div className="form-thanks">
            <div className="form-thanks__text" dangerouslySetInnerHTML={{ __html: text }} />
            { cb && (
                <Button
                    cb={cb}
                    buttonType="button"
                    additionalClasses="form__button button--red"
                    text="Закрыть"
                />
            )}
        </div>
    );
};

ThanksBlock.defaultProps = {
    cb: false,
};

ThanksBlock.propTypes = {
    text: PropTypes.string.isRequired,
    cb: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.bool,
    ]),
};

export default ThanksBlock;
