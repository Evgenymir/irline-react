import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './pages/header/Header.jsx';
import MainScreen from './pages/section/main-screen/Main-screen.jsx';
import StagesCooperation from './pages/section/stages-cooperation/Stages-cooperation.jsx';
import AboutCompany from './pages/section/about-company/About-company.jsx';
import GratefulClients from './pages/section/grateful-clients/Grateful-clients.jsx';
import Contacts from './pages/section/contacts/Contacts.jsx';
import Footer from './pages/footer/Footer.jsx';
import Popup from './components/popup/Popup.jsx';
import MobileMenu from './components/mobile-menu/Mobile-menu.jsx';

const mapStateToProps = ({ initState }) => {
    const { UIState, callBack, order } = initState;

    if (UIState === undefined) {
        return {};
    }

    return {
        popup: UIState.popupForm,
        callBack: callBack.name,
        order: order.name,
        mobileMenu: UIState.mobileMenu,
    };
};

const App = ({
    popup, callBack, order, mobileMenu,
}) => {
    const title = popup.nameForm === 'callBack' ? callBack : order;

    return (
        <>
            <Header />
            <MainScreen />
            <StagesCooperation />
            <AboutCompany />
            <GratefulClients />
            <Contacts />
            <Footer />
            { popup.isActive && <Popup formName={popup.nameForm} title={title} /> }
            { mobileMenu.isActive && <MobileMenu /> }
        </>
    );
};

App.defaultProps = {
    popup: {
        isActive: false,
        nameForm: '',
    },
    callBack: 'Нет текста',
    order: 'Нет текста',
    mobileMenu: {
        isActive: false,
    },
};

App.propTypes = {
    popup: PropTypes.shape({
        isActive: PropTypes.bool,
        nameForm: PropTypes.string,
    }),
    callBack: PropTypes.string,
    order: PropTypes.string,
    mobileMenu: PropTypes.objectOf(PropTypes.bool),
};

export default connect(mapStateToProps)(App);
