import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import Preloader from './components/preloader/Preloader.jsx';
import Header from './pages/header/Header.jsx';
import Footer from './pages/footer/Footer.jsx';
import Popup from './components/popup/Popup.jsx';
import MobileMenu from './components/mobile-menu/Mobile-menu.jsx';
import MainPage from './pages/main/Main.jsx';
import AboutPage from './pages/about/About.jsx';
import ProductsPage from './pages/products/Products.jsx';
import ProductsCard from './pages/products-card/Products-card.jsx';
import ServicesPage from './pages/services/Services.jsx';
import ProjectsPage from './pages/projects/Projects.jsx';
import ContactPage from './pages/contact/Contact.jsx';
import Page404 from './pages/404/404.jsx';

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
                <Route path="/" exact render={(props) => <MainPage {...props} />} />
                <Route path="/about" render={(props) => <AboutPage {...props} />} />
                <Route path="/products" exact render={(props) => <ProductsPage {...props} />} />
                <Route path="/products/:id" render={(props) => <ProductsCard {...props} />} />
                <Route path="/services" render={(props) => <ServicesPage {...props} />} />
                <Route path="/projects" render={(props) => <ProjectsPage {...props} />} />
                <Route path="/contact" render={(props) => <ContactPage {...props} />} />
                <Route render={() => <Page404 />} />
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
