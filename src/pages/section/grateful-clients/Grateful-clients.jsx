import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SlickSlider from 'react-slick';
import '../../../../node_modules/slick-carousel/slick/slick.scss';
import './Grateful-clients.scss';
import Lightbox from 'react-image-lightbox';
import '../../../css/image-lightbox.scss';

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

const normalizeData = (data) => {
    if (data === undefined) {
        return {};
    }

    const { gratitudes } = data;

    return {
        title: data.title,
        items: gratitudes.allIds.map((item) => gratitudes.byId[item]),
        imgLightbox: gratitudes.allIds.map((item) => gratitudes.byId[item].imgBig),
    };
};

const mapStateToProps = ({ initState }) => {
    const { gratefulClients } = initState;
    return normalizeData(gratefulClients);
};

const GratefulClients = ({ title, items, imgLightbox }) => {
    const [isOpenLightbox, setIsOpenLightbox] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openLightbox = (index) => (e) => {
        e.preventDefault();
        setIsOpenLightbox(true);
        setPhotoIndex(index);
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
                { isOpenLightbox && (
                    <Lightbox
                        mainSrc={imgLightbox[photoIndex]}
                        nextSrc={imgLightbox[(photoIndex + 1) % imgLightbox.length]}
                        prevSrc={imgLightbox[
                            (photoIndex + imgLightbox.length - 1) % imgLightbox.length
                        ]}
                        onCloseRequest={() => setIsOpenLightbox(false)}
                        onMovePrevRequest={() => setPhotoIndex(
                            (photoIndex + imgLightbox.length - 1) % imgLightbox.length,
                        )}
                        onMoveNextRequest={() => setPhotoIndex(
                            (photoIndex + 1) % imgLightbox.length,
                        )}
                    />
                ) }
            </div>
        </section>
    );
};

GratefulClients.defaultProps = {
    title: 'Нет заголовка',
    items: [],
    imagesBig: [],
};

GratefulClients.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string,
        imgBig: PropTypes.string,
        imgAlt: PropTypes.string,
    })),
    imagesBig: PropTypes.arrayOf(PropTypes.string),
};

export default connect(mapStateToProps)(GratefulClients);
