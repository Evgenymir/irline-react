import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './About-company.scss';

const normalizeData = (data) => {
    if (data === undefined) {
        return {};
    }

    return {
        title: data.title,
        items: data.allIds.map((item) => data.byId[item]),
    };
};

const mapStateToProps = ({ initState }) => {
    const { aboutCompany } = initState;
    return normalizeData(aboutCompany);
};

const AboutCompany = ({ title, items }) => (
    <section className="about">
        <div className="container">
            <div className="about__title title">
                <h3>{title}</h3>
            </div>
            <div className="about__content">
                { items.map(({
                    id, text, img, imgAlt,
                }) => (
                    <div className="about__item" key={id}>
                        <div className="about__item-img">
                            <img src={img} alt={imgAlt} />
                        </div>
                        <div className="about__item-text">
                            <p className="about__item-text-p" dangerouslySetInnerHTML={{ __html: text }} />
                            <span className="about__item-text-span">
                                <span
                                    className="about__item-text-arrow"
                                    style={{ backgroundImage: 'url(./img/arrowSmallRed.png)' }}
                                />
                                0
                                {id}
                            </span>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    </section>
);

AboutCompany.defaultProps = {
    title: 'Нет заголовка',
    items: [],
};

AboutCompany.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        img: PropTypes.string,
        imgAlt: PropTypes.string,
    })),
};

export default connect(mapStateToProps)(AboutCompany);
