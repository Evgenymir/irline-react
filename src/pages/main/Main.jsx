import React, { useEffect } from 'react';
import MainScreen from '../section/main-screen/Main-screen.jsx';
import StagesCooperation from '../section/stages-cooperation/Stages-cooperation.jsx';
import AboutCompany from '../section/about-company/About-company.jsx';
import GratefulClients from '../section/grateful-clients/Grateful-clients.jsx';
import Contacts from '../section/contacts/Contacts.jsx';
import scrollPageTop from '../../assets/js/scrollPageTop';

const Main = () => {
    useEffect(() => {
        scrollPageTop();
    }, []);

    return (
        <>
            <MainScreen />
            <StagesCooperation />
            <AboutCompany />
            <GratefulClients />
            <Contacts />
        </>
    );
};

export default Main;
