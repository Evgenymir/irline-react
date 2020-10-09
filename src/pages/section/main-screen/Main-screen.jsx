import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Main-screen.scss';
import SlickSlider from 'react-slick';
import '../../../../node_modules/slick-carousel/slick/slick.scss';
import Button from '../../../components/button/Button.jsx';

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button
            type="button"
            className={`${className} main-screen__control prev`}
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
            className={`${className} main-screen__control next`}
            style={{ ...style, backgroundImage: 'url(./img/sliderNext.png)' }}
            onClick={onClick}
        />
    );
};

const sliderSettings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
};

const mapStateToProps = ({ initState }) => {
    const { mainSlider } = initState;
    return {
        sliderItems: mainSlider,
    };
};

const MainScreen = ({ sliderItems }) => {
    return (
        <section className="main-screen">
            <div className="main-screen__wrap">
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <SlickSlider className="main-screen__slider" {...sliderSettings}>
                    { sliderItems.map(({
                        id, text, link, linkText, img,
                    }) => (
                        <div key={id}>
                            <div className="main-screen__slider-item" style={{ backgroundImage: `url(${img})` }}>
                                <div className="main-screen__slider-item-title" dangerouslySetInnerHTML={{ __html: text }} />
                                <Button link={link} text={linkText} additionalClasses="main-screen__slider-item-link button--red" />
                            </div>
                        </div>
                    )) }
                </SlickSlider>
            </div>
        </section>
    );
};

MainScreen.defaultProps = {
    sliderItems: [],
};

MainScreen.propTypes = {
    sliderItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string,
        link: PropTypes.string.isRequired,
        linkText: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    })),
};

export default connect(mapStateToProps)(MainScreen);
