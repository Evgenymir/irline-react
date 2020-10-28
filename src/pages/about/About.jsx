import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainScreen from '../section/main-screen/Main-screen.jsx';
import AboutCompany from '../section/about-company/About-company.jsx';
import GratefulClients from '../section/grateful-clients/Grateful-clients.jsx';
import './About.scss';
import api from '../../assets/js/api';
import {
    startGettingPageContent,
    getPageContentSuccess,
    getPageContentFailure,
    openModalLightBox,
} from '../../actions/index';
import scrollPageTop from '../../assets/js/scrollPageTop';

const mapStateToProps = ({ innerContent }) => {
    const { aboutPage } = innerContent;
    if (!aboutPage) {
        return {
            hasContent: false,
        };
    }

    const {
        title, text, moreDetails, certificate,
    } = aboutPage;

    const certificates = certificate.allIds.map((item) => certificate.byId[item]);

    return {
        hasContent: true,
        title,
        text,
        moreDetails,
        certificates,
        imagesForLightBox: certificates.map((item) => item.imgBig),
    };
};

const About = ({
    dispatch, hasContent, title, text, moreDetails, certificates, imagesForLightBox,
}) => {
    useEffect(() => {
        scrollPageTop();
        if (hasContent) {
            return;
        }

        dispatch(startGettingPageContent());

        api.get('./AboutData.json')
            .then((response) => {
                const { data } = response;
                dispatch(getPageContentSuccess(data));
            })
            .catch((e) => {
                dispatch(getPageContentFailure(e.message));
            });
    }, []);

    const openLightbox = (index) => (e) => {
        e.preventDefault();

        const data = {
            index,
            images: imagesForLightBox,
        };

        dispatch(openModalLightBox(data));
    };

    return (
        <>
            <MainScreen innerPage />
            <AboutCompany />
            <div className="about-page">
                <div className="container">
                    <div className="about-page__content">
                        <div className="about-page__left">
                            <div className="about-page__title">
                                {title}
                            </div>
                            <div className="about-page__desc">
                                <p dangerouslySetInnerHTML={{ __html: text }} />
                                <a href={moreDetails.link} target="_blank" rel="noreferrer">
                                    {moreDetails.text}
                                </a>
                            </div>
                        </div>
                        <div className="about-page__right">
                            <div className="about-page__certificate">
                                { certificates.map((item, index) => (
                                    <a
                                        href={item.imgBig}
                                        key={item.id}
                                        onClick={openLightbox(index)}
                                    >
                                        <img src={item.img} alt={item.imgAlt} />
                                    </a>
                                )) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GratefulClients />
        </>
    );
};

About.defaultProps = {
    title: '',
    text: '',
    moreDetails: {
        link: '',
        text: '',
    },
    certificates: [],
    imagesForLightBox: [],
};

About.propTypes = {
    dispatch: PropTypes.func.isRequired,
    hasContent: PropTypes.bool.isRequired,
    title: PropTypes.string,
    text: PropTypes.string,
    moreDetails: PropTypes.objectOf(PropTypes.string),
    certificates: PropTypes.arrayOf(PropTypes.object),
    imagesForLightBox: PropTypes.arrayOf(PropTypes.string),
};

export default connect(mapStateToProps)(About);
