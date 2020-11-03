import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Services.scss';
import StagesCooperation from '../section/stages-cooperation/Stages-cooperation.jsx';
import { getPageContentFailure, getPageContentSuccess, startGettingPageContent } from '../../actions';
import api from '../../assets/js/api';
import scrollPageTop from '../../assets/js/scrollPageTop';

const mapStateToProps = ({ innerContent }) => {
    const { servicesPage } = innerContent;

    if (!servicesPage) {
        return {
            hasContent: false,
        };
    }

    const { title, services } = servicesPage;
    return {
        hasContent: true,
        title,
        services: services.allIds.map((item) => services.byId[item]),
    };
};

const Services = ({
    hasContent, dispatch, title, services,
}) => {
    useEffect(() => {
        scrollPageTop();

        if (hasContent) {
            return;
        }

        dispatch(startGettingPageContent());

        api.get('./ServicesData.json')
            .then((response) => {
                const { data } = response;
                dispatch(getPageContentSuccess(data));
            })
            .catch((e) => {
                dispatch(getPageContentFailure(e.message));
            });
    }, []);

    return (
        <div className="page-wrapper">
            <div className="container">
                <div className="title">{title}</div>
                <div className="services">
                    { services.map((item) => (
                        <div className="services__item" key={item.title}>
                            <div className="services__item-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="services__item-title">{item.title}</div>
                            <div className="services__item-desc" dangerouslySetInnerHTML={{ __html: item.description }} />
                        </div>
                    )) }
                </div>
                <StagesCooperation />
            </div>
        </div>
    );
};

Services.defaultProps = {
    title: 'Нет заголовка',
    services: [],
};

Services.propTypes = {
    hasContent: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    title: PropTypes.string,
    services: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(Services);
