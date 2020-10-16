import React from 'react';
import './App.scss';
import Header from './pages/header/Header.jsx';
import MainScreen from './pages/section/main-screen/Main-screen.jsx';
import StagesCooperation from './pages/section/stages-cooperation/Stages-cooperation.jsx';
import AboutCompany from './pages/section/about-company/About-company.jsx';
import GratefulClients from './pages/section/grateful-clients/Grateful-clients.jsx';
import Contacts from './pages/section/contacts/Contacts.jsx';
import Footer from './pages/footer/Footer.jsx';
import Popups from './components/popup/Popups.jsx';

const App = () => (
    <>
        <Header />
        <MainScreen />
        <StagesCooperation />
        <AboutCompany />
        <GratefulClients />
        <Contacts />
        <Footer />
        <Popups />
    </>
);

export default App;
