import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Preloader from './components/preloader/Preloader.jsx';
import Header from './pages/header/Header.jsx';
import MainScreen from './pages/section/main-screen/Main-screen.jsx';
import StagesCooperation from './pages/section/stages-cooperation/Stages-cooperation.jsx';
import AboutCompany from './pages/section/about-company/About-company.jsx';
import GratefulClients from './pages/section/grateful-clients/Grateful-clients.jsx';
import Contacts from './pages/section/contacts/Contacts.jsx';
import Footer from './pages/footer/Footer.jsx';
import Popup from './components/popup/Popup.jsx';
import MobileMenu from './components/mobile-menu/Mobile-menu.jsx';

const mapStateToProps = ({ initState, uiState }) => {
    const {
        loading, callBack, order,
    } = initState;
    const { mobileMenu, popupForm } = uiState;

    if (loading) {
        return {
            isLoadData: loading,
        };
    }

    return {
        isLoadData: loading,
        popup: popupForm,
        callBack: callBack.name,
        order: order.name,
        isOpenMobileMenu: mobileMenu.isActive,
    };
};

const App = ({
    isLoadData, popup, callBack, order, isOpenMobileMenu,
}) => {
    const title = popup.nameForm === 'callBack' ? callBack : order;

    return (
        <>
            <Preloader show={isLoadData} />
            <Header />
            <MainScreen />
            <StagesCooperation />
            <AboutCompany />
            <GratefulClients />
            <Contacts />
            <Footer />
            { popup.isActive && <Popup formName={popup.nameForm} title={title} /> }
            { isOpenMobileMenu && <MobileMenu /> }
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
    isOpenMobileMenu: false,
};

App.propTypes = {
    isLoadData: PropTypes.bool.isRequired,
    popup: PropTypes.shape({
        isActive: PropTypes.bool,
        nameForm: PropTypes.string,
    }),
    callBack: PropTypes.string,
    order: PropTypes.string,
    isOpenMobileMenu: PropTypes.bool,
};

export default connect(mapStateToProps)(App);
