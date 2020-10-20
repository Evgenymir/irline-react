import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../../components/button/Button.jsx';
import './Contacts.scss';
import Map from '../../../components/map/yandexMap.jsx';
import phoneWithoutSpaces from '../../../assets/js/phoneWithoutSpaces';

const mapStateToProps = ({ initState }) => {
    const {
        map, address, email, phone, callBack,
    } = initState;
    return {
        map, address, email, phone, callBack,
    };
};
const Contacts = ({
    map, address, email, phone, callBack,
}) => (
    <section className="contacts-section">
        <Map data={map} />
        <div className="contacts-section__content">
            <p>{address}</p>
            <a href={`mailto:${email}`} className="contacts-section__email">
                e-mail:&nbsp;
                {email}
            </a>
            <a href={`tel:${phoneWithoutSpaces(phone)}`} className="contacts-section__phone">{phone}</a>
            <Button link={callBack.link} text={callBack.name} additionalClasses="contacts-section__button" />
        </div>
    </section>
);

Contacts.defaultProps = {
    map: null,
    address: 'Нет адреса',
    email: 'Нет email адреса',
    phone: 'Нет номера',
    callBack: {
        name: 'Кнопка',
        link: 'callBack',
    },
};

Contacts.propTypes = {
    map: PropTypes.shape({
        center: PropTypes.arrayOf(PropTypes.number),
        zoom: PropTypes.number,
        content: PropTypes.string,
        title: PropTypes.string,
    }),
    address: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    callBack: PropTypes.objectOf(PropTypes.string),
};

export default connect(mapStateToProps)(Contacts);
