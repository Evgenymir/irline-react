import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SlickSlider from 'react-slick';
import '../../../../node_modules/slick-carousel/slick/slick.scss';
import './Grateful-clients.scss';
import ModalLightBox from '../../../components/light-box/Light-box.jsx';
import { openModalLightBox } from '../../../actions/index';

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button
            type="button"
            className={`${className} grateful-clients__control prev`}
            style={{ ...style, backgroundImage: 'url(./img/sliderPrev.png)' }}
            onClick={onClick}
        />
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button
            type="button"
            className={`${className} grateful-clients__control next`}
            style={{ ...style, backgroundImage: 'url(./img/sliderNext.png)' }}
            onClick={onClick}
        />
    );
};

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            },
        },
    ],
};

const mapStateToProps = ({ initState, uiState }) => {
    const { gratefulClients } = initState;

    if (!gratefulClients) {
        return {};
    }

    const { gratitudes } = gratefulClients;
    const { lightBox } = uiState;

    return {
        title: gratefulClients.title,
        items: gratitudes.allIds.map((item) => gratitudes.byId[item]),
        imagesForLightBox: gratitudes.allIds.map((item) => gratitudes.byId[item].imgBig),
        lightBox,
    };
};

const GratefulClients = ({
    title, items, imagesForLightBox, lightBox, dispatch,
}) => {
    const openLightbox = (index) => (e) => {
        e.preventDefault();
        const data = {
            index,
            images: imagesForLightBox,
        };
        dispatch(openModalLightBox(data));
    };

    return (
        <section className="grateful-clients" style={{ backgroundImage: 'url("./img/bg/gratitudes.jpg")' }}>
            <div className="container">
                <div className="grateful-clients__title title">{title}</div>
                <div className="grateful-clients__slider-block">
                    <div className="grateful-clients__wrap">
                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                        <SlickSlider className="grateful-clients__slider" {...sliderSettings}>
                            { items.map(({
                                id, img, imgBig, imgAlt,
                            }, index) => (
                                <div className="grateful-clients__slider-item" key={id}>
                                    <a href={imgBig} onClick={openLightbox(index)}>
                                        <img src={img} alt={imgAlt} />
                                    </a>
                                </div>
                            )) }
                        </SlickSlider>
                    </div>
                </div>
                { lightBox.isOpen && (
                    <ModalLightBox
                        items={lightBox.items}
                        currentItem={lightBox.currentItem}
                    />
                ) }
            </div>
        </section>
    );
};

PrevArrow.propTypes = {
    className: PropTypes.string.isRequired,
    style: PropTypes.objectOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired,
};

NextArrow.propTypes = {
    className: PropTypes.string.isRequired,
    style: PropTypes.objectOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired,
};

GratefulClients.defaultProps = {
    title: 'Нет заголовка',
    items: [],
    imagesForLightBox: [],
    lightBox: {
        isOpen: false,
        items: [],
        currentItem: 0,
    },
};

GratefulClients.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string,
        imgBig: PropTypes.string,
        imgAlt: PropTypes.string,
    })),
    imagesForLightBox: PropTypes.arrayOf(PropTypes.string),
    lightBox: PropTypes.shape({
        isOpen: PropTypes.bool,
        items: PropTypes.arrayOf(PropTypes.string),
        currentItem: PropTypes.number,
    }),
    dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(GratefulClients);
