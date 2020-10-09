import React from 'react';
import './App.scss';
import Header from './pages/header/Header.jsx';
import MainScreen from './pages/section/main-screen/Main-screen.jsx';
import StagesCooperation from './pages/section/stages-cooperation/Stages-cooperation.jsx';

const mainSlider = [
    {
        id: 1,
        text: 'С нами <span>комфортно</span>',
        link: '#order',
        linkText: 'Заказать проект',
        img: './img/bg/main.jpg',
    }, {
        id: 2,
        text: 'С нами <span>комфортно</span> <span>креативно</span>',
        link: '#order',
        linkText: 'Заказать проект',
        img: './img/bg/slide2.jpg',
    }, {
        id: 3,
        text: 'С нами <span>комфортно</span> <span>креативно</span> <span>практично</span>',
        link: '#order',
        linkText: 'Заказать проект',
        img: './img/bg/gratitudes.jpg',
    },
];

const App = () => (
    <>
        <Header />
        <MainScreen slider={mainSlider} />
        <StagesCooperation />
    </>
);

export default App;
