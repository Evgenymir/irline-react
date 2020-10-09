import React from 'react';
import './App.scss';
import Header from './pages/header/Header.jsx';
import MainScreen from './pages/section/main-screen/Main-screen.jsx';
import StagesCooperation from './pages/section/stages-cooperation/Stages-cooperation.jsx';

const App = () => (
    <>
        <Header />
        <MainScreen />
        <StagesCooperation />
    </>
);

export default App;
