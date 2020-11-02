import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import scrollPageTop from '../../assets/js/scrollPageTop';
import {
    getPageContentFailure,
    getPageContentSuccess,
    startGettingPageContent,
} from '../../actions';
import api from '../../assets/js/api';
import './Products.scss';

const mapStateToProps = ({ innerContent }) => {
    const { productsPage } = innerContent;

    if (!productsPage) {
        return {
            hasContent: false,
        };
    }

    const { title, products } = productsPage;

    return {
        hasContent: true,
        title,
        products: products.allIds.map((item) => products.byId[item]),
    };
};

const Products = ({
    hasContent, dispatch, title, products,
}) => {
    useEffect(() => {
        scrollPageTop();

        if (hasContent) {
            return;
        }

        dispatch(startGettingPageContent());

        api.get('./ProductsData.json')
            .then((response) => {
                const { data } = response;
                dispatch(getPageContentSuccess(data));
            })
            .catch((e) => {
                dispatch(getPageContentFailure(e.message));
            });
    }, []);

    return (
        <div className="page-wrapper product-page">
            <div className="container">
                <div className="product-page__title title">{title}</div>
                <div className="product-page__list">
                    { products.map((product) => (
                        <Link
                            key={product.id}
                            to={(location) => ({ ...location, pathname: `${location.pathname}/${product.url}` })}
                            className="product-page__item"
                        >
                            <div className="product-page__item-title">
                                {product.title}
                                <span
                                    className="product-page__item-title-arrow"
                                    style={{ backgroundImage: 'url("./img/arrowWhite.png")' }}
                                />
                            </div>
                            <div className="product-page__item-img">
                                <img src={product.img} alt={product.title} />
                            </div>
                        </Link>
                    )) }
                </div>
            </div>
        </div>
    );
};

Products.defaultProps = {
    title: '',
    products: [],
};

Products.propTypes = {
    dispatch: PropTypes.func.isRequired,
    hasContent: PropTypes.bool.isRequired,
    title: PropTypes.string,
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    })),
};

export default connect(mapStateToProps)(Products);
