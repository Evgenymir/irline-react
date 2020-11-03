import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import Router from './Router.jsx';
import Preloader from './components/preloader/Preloader.jsx';
import Header from './pages/header/Header.jsx';
import Footer from './pages/footer/Footer.jsx';
import Popup from './components/popup/Popup.jsx';
import MobileMenu from './components/mobile-menu/Mobile-menu.jsx';

const mapStateToProps = ({ loading, initState, uiState }) => {
    const {
        callBack, order,
    } = initState;
    const { isLoad, error } = loading;
    const { mobileMenu, popupForm } = uiState;

    if (isLoad) {
        return {
            isLoadData: isLoad,
        };
    }

    return {
        isLoadData: isLoad,
        popup: popupForm,
        callBack: callBack.name,
        order: order.name,
        isOpenMobileMenu: mobileMenu.isActive,
    };
};

const App = ({
    isLoadData, popup, callBack, order, isOpenMobileMenu,
}) => {
    const location = useLocation();
    const title = popup.nameForm === 'callBack' ? callBack : order;

    return (
        <>
            <Preloader show={isLoadData} />
            <Header innerPage={location.pathname !== '/'} />
            <Switch location={location}>
                { Router.map(({ path, name, component }) => (
                    <Route path={path} exact render={(props) => component(props)} key={name} />
                )) }
            </Switch>
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
