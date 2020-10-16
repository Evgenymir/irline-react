import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Popup from './Popup.jsx';

const mapStateToProps = ({ initState }) => {
    const { UIState, callBack, order } = initState;

    if (UIState === undefined) {
        return {};
    }

    return {
        popup: UIState.popupForm,
        callBack: callBack.name,
        order: order.name,
    };
};

const Popups = ({ popup, callBack, order }) => {
    const title = popup.nameForm === 'callBack' ? callBack : order;
    return popup.isActive && <Popup formName={popup.nameForm} title={title} />;
};

Popups.defaultProps = {
    popup: {
        isActive: false,
        nameForm: '',
    },
    callBack: 'Нет текста',
    order: 'Нет текста',
};

Popups.propTypes = {
    popup: PropTypes.shape({
        isActive: PropTypes.bool,
        nameForm: PropTypes.string,
    }),
    callBack: PropTypes.string,
    order: PropTypes.string,
};

export default connect(mapStateToProps)(Popups);
