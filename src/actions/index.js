import api from '../assets/js/api';

const firstInitAppStarted = () => ({
    type: 'FIRST_INIT_APP_STARTED',
});

const firstInitAppSuccess = (data) => ({
    type: 'FIRST_INIT_APP_SUCCESS',
    payload: {
        ...data,
    },
});

const firstInitAppFailure = (error) => ({
    type: 'FIRST_INIT_APP_FAILURE',
    payload: {
        error,
    },
});

export const firstInitApp = () => (dispatch) => {
    dispatch(firstInitAppStarted());

    api.get('./AppData.json')
        .then((response) => {
            const { data } = response;
            dispatch(firstInitAppSuccess(data));
        })
        .catch((e) => {
            dispatch(firstInitAppFailure(e.message));
        });
};

export const stagesOfCooperationOpenPopup = (content) => ({
    type: 'STAGES_OF_COOPERATION_OPEN_POPUP',
    payload: {
        content,
    },
});

export const stagesOfCooperationClosePopup = () => ({
    type: 'STAGES_OF_COOPERATION_CLOSE_POPUP',
});

export const openPopupForm = (name) => ({
    type: 'OPEN_POPUP_FORM',
    payload: {
        name,
    },
});

export const closePopupForm = () => ({
    type: 'CLOSE_POPUP_FORM',
});

export const openMobileMenu = () => ({
    type: 'OPEN_MOBILE_MENU',
});

export const closeMobileMenu = () => ({
    type: 'CLOSE_MOBILE_MENU',
});

export const openModalLightBox = (data) => ({
    type: 'OPEN_MODAL_LIGHT_BOX',
    payload: data,
});

export const closeModalLightBox = () => ({
    type: 'CLOSE_MODAL_LIGHT_BOX',
});

export const startGettingPageContent = () => ({
    type: 'START_GETTING_PAGE_CONTENT',
});

export const getPageContentSuccess = (data) => ({
    type: 'GET_PAGE_CONTENT_SUCCESS',
    payload: {
        data,
    },
});

export const getPageContentFailure = (error) => ({
    type: 'GET_PAGE_CONTENT_FAILURE',
    payload: {
        error,
    },
});

export const setCurrentProductIdCard = (id) => ({
    type: 'SET_CURRENT_PRODUCT_ID_CARD',
    payload: {
        id,
    },
});

export const getProductsSuccess = (data) => ({
    type: 'GET_PRODUCTS_SUCCESS',
    payload: {
        data,
    },
});
