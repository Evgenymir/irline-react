import React from 'react';
import MainPage from './pages/main/Main.jsx';
import AboutPage from './pages/about/About.jsx';
import ProductsPage from './pages/products/Products.jsx';
import ProductsCard from './pages/products-card/Products-card.jsx';
import ServicesPage from './pages/services/Services.jsx';
import ContactPage from './pages/contact/Contact.jsx';
import PrivacyPolicyPage from './pages/privacy-policy/Privacy-policy.jsx';
import Page404 from './pages/404/404.jsx';

/* eslint-disable react/display-name */
const Router = [
    {
        path: '/',
        name: 'main',
        component: (props) => <MainPage {...props} />,
    }, {
        path: '/about',
        name: 'about',
        component: (props) => <AboutPage {...props} />,
    }, {
        path: '/products',
        name: 'products',
        component: (props) => <ProductsPage {...props} />,
    }, {
        path: '/products/:id',
        name: 'productsInner',
        component: (props) => <ProductsCard {...props} />,
    }, {
        path: '/services',
        name: 'services',
        component: (props) => <ServicesPage {...props} />,
    }, {
        path: '/contact',
        name: 'contact',
        component: (props) => <ContactPage {...props} />,
    }, {
        path: '/privacy-policy',
        name: 'privacy-policy',
        component: (props) => <PrivacyPolicyPage {...props} />,
    }, {
        path: '',
        name: 'notFound',
        component: () => <Page404 />,
    },
];
/* eslint-enable */

export default Router;
