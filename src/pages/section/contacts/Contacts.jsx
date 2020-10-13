import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../../components/button/Button.jsx';
import './Contacts.scss';
import Map from '../../../components/map/yandexMap.jsx';

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
}) => {
    const phoneWithoutSpaces = phone.split('').map((item) => item.trim()).join('');
    return (
        <section className="contacts-section">
            <Map data={map} />
            <div className="contacts-section__content">
                <p>{address}</p>
                <a href={`mailto:${email}`} className="contacts-section__email">
                    e-mail:&nbsp;
                    {email}
                </a>
                <a href={`tel:${phoneWithoutSpaces}`} className="contacts-section__phone">{phone}</a>
                <Button link="#callBack" text={callBack} additionalClasses="contacts-section__button" />
            </div>
        </section>
    );
};

Contacts.defaultProps = {
    map: {},
    address: 'Нет адреса',
    email: 'Нет email адреса',
    phone: 'Нет номера',
    callBack: 'Кнопка',
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
    callBack: PropTypes.string,
};

export default connect(mapStateToProps)(Contacts);
