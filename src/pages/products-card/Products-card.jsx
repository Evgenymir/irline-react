import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';
import { Link } from 'react-router-dom';
import { getPageContentFailure, getProductsSuccess, startGettingPageContent } from '../../actions';
import api from '../../assets/js/api';
import '../../../node_modules/slick-carousel/slick/slick.scss';
import './Products-card.scss';
import scrollPageTop from '../../assets/js/scrollPageTop';

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button
            type="button"
            className={`${className} product-card__slider-control prev`}
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
            className={`${className} product-card__slider-control next`}
            style={{ ...style, backgroundImage: 'url(./img/sliderNext.png)' }}
            onClick={onClick}
        />
    );
};

const sliderSettings = {
    customPaging(i) {
        return (
            <img src={`./img/productCardSlideSmall${i + 1}.jpg`} alt="Каринка" />
        );
    },
    dots: true,
    dotsClass: 'product-card__slider-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
};

const mapStateToProps = ({ products }) => {
    const { currentProductName } = products;

    if (!products[currentProductName]) {
        return {
            hasContent: false,
        };
    }

    return {
        hasContent: true,
        product: products[currentProductName],
    };
};

const ProductsCard = ({
    match, hasContent, dispatch, product,
}) => {
    useEffect(() => {
        scrollPageTop();

        if (hasContent) {
            return;
        }

        dispatch(startGettingPageContent());
        const productCardId = match.params.id;

        api.get(`./ProductCard-${productCardId}.json`)
            .then((response) => {
                const { data } = response;
                const productName = `productCard-${productCardId}`;
                const products = {};
                products[productName] = data;
                const result = {
                    products,
                    currentProductName: productName,
                };
                dispatch(getProductsSuccess(result));
            })
            .catch((e) => {
                dispatch(getPageContentFailure(e.message));
            });
    }, []);
    return (
        <div className="page-wrapper product-card">
            <div className="container">
                <div className="product-card__title title">{product.title}</div>
                <div className="product-card__content">
                    <div className="product-card__left">
                        <div className="product-card__content-title">Описание</div>
                        <div className="product-card__desc" dangerouslySetInnerHTML={{ __html: product.description }} />
                    </div>
                    <div className="product-card__right">
                        <SlickSlider className="product-card__slider" {...sliderSettings}>
                            { product.images.big.map((item) => (
                                <div key={`${item}-${Math.random()}`}>
                                    <img src={item} alt="картинка" />
                                </div>
                            )) }
                        </SlickSlider>
                        <div
                            className="product-card__back"
                            style={{ backgroundImage: 'url("./img/productCardArrowBack.png")' }}
                        >
                            <Link to="/products">Назад к списку продукции</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

ProductsCard.defaultProps = {
    hasContent: false,
    product: {
        title: '',
        description: '',
        images: {
            big: [],
            small: [],
        },
    },
};

ProductsCard.propTypes = {
    match: PropTypes.objectOf(PropTypes.any).isRequired,
    hasContent: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    product: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        images: PropTypes.objectOf(PropTypes.array),
    }),
};

export default connect(mapStateToProps)(ProductsCard);
