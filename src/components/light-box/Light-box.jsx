import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import { connect } from 'react-redux';
import { closeModalLightBox } from '../../actions/index';
import './Light-box.scss';

const ModalLightBox = ({ items, currentItem, dispatch }) => {
    const [index, setIndex] = useState(currentItem);
    const closeLightBox = () => {
        dispatch(closeModalLightBox());
    };

    return (
        <Lightbox
            mainSrc={items[index]}
            nextSrc={items[(index + 1) % items.length]}
            prevSrc={items[
                (index + items.length - 1) % items.length
            ]}
            onCloseRequest={() => closeLightBox()}
            onMovePrevRequest={() => setIndex(
                (index + items.length - 1) % items.length,
            )}
            onMoveNextRequest={() => setIndex(
                (index + 1) % items.length,
            )}
        />
    );
};

ModalLightBox.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentItem: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect(null)(ModalLightBox);
