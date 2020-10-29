import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
    isLoad: false,
    error: null,
};

const initialUIState = {
    stagesOfCooperation: {
        popupContent: {},
        isActivePopup: false,
    },
    popupForm: {
        isActive: false,
        nameForm: '',
    },
    mobileMenu: {
        isActive: false,
    },
    lightBox: {
        isOpen: false,
        items: [],
        currentItem: 0,
    },
};

const loading = (state = initialState, action) => {
    switch (action.type) {
        case 'FIRST_INIT_APP_STARTED': {
            return {
                ...state,
                isLoad: true,
            };
        }
        case 'FIRST_INIT_APP_SUCCESS': {
            return {
                ...state,
                isLoad: false,
            };
        }
        case 'FIRST_INIT_APP_FAILURE': {
            return {
                ...state,
                isLoad: false,
                error: action.payload.error,
            };
        }
        case 'START_GETTING_PAGE_CONTENT': {
            return {
                ...state,
                isLoad: true,
            };
        }
        case 'GET_PAGE_CONTENT_SUCCESS': {
            return {
                ...state,
                isLoad: false,
            };
        }
        case 'GET_PAGE_CONTENT_FAILURE': {
            return {
                ...state,
                isLoad: false,
                error: action.payload.error,
            };
        }
        case 'GET_PRODUCTS_SUCCESS': {
            return {
                ...state,
                isLoad: false,
            };
        }
        default: {
            return state;
        }
    }
};

const initState = (state = {}, action) => {
    switch (action.type) {
        case 'FIRST_INIT_APP_SUCCESS': {
            const data = action.payload;
            return {
                ...state,
                ...data,
            };
        }
        case 'FIRST_INIT_APP_FAILURE': {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};

const uiState = (state = initialUIState, action) => {
    switch (action.type) {
        case 'OPEN_POPUP_FORM': {
            const { name } = action.payload;
            return {
                ...state,
                popupForm: {
                    isActive: true,
                    nameForm: name,
                },
            };
        }
        case 'CLOSE_POPUP_FORM': {
            return {
                ...state,
                popupForm: {
                    isActive: false,
                    nameForm: '',
                },
            };
        }
        case 'STAGES_OF_COOPERATION_OPEN_POPUP': {
            const { content } = action.payload;
            return {
                ...state,
                stagesOfCooperation: {
                    popupContent: content,
                    isActivePopup: true,
                },
            };
        }
        case 'STAGES_OF_COOPERATION_CLOSE_POPUP': {
            return {
                ...state,
                stagesOfCooperation: {
                    popupContent: {},
                    isActivePopup: false,
                },
            };
        }
        case 'OPEN_MOBILE_MENU': {
            return {
                ...state,
                mobileMenu: {
                    isActive: true,
                },
            };
        }
        case 'CLOSE_MOBILE_MENU': {
            return {
                ...state,
                mobileMenu: {
                    isActive: false,
                },
            };
        }
        case 'OPEN_MODAL_LIGHT_BOX': {
            const { index, images } = action.payload;

            return {
                ...state,
                lightBox: {
                    isOpen: true,
                    items: images,
                    currentItem: index,
                },
            };
        }
        case 'CLOSE_MODAL_LIGHT_BOX': {
            return {
                ...state,
                lightBox: {
                    isOpen: false,
                    items: [],
                    currentItem: 0,
                },
            };
        }
        default: {
            return state;
        }
    }
};

const innerContent = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PAGE_CONTENT_SUCCESS': {
            const { data } = action.payload;
            return {
                ...state,
                ...data,
            };
        }
        default: {
            return state;
        }
    }
};

const products = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_SUCCESS': {
            const { data } = action.payload;
            const result = {
                currentProductName: data.currentProductName,
                ...data.products,
            };
            return {
                ...state,
                ...result,
            };
        }
        case 'SET_CURRENT_PRODUCT_ID_CARD': {
            const { id } = action.payload;
            return {
                ...state,
                currentProductName: id,
            };
        }
        default: {
            return state;
        }
    }
};

const rootReducers = combineReducers({
    loading,
    initState,
    uiState,
    form: formReducer,
    innerContent,
    products,
});

export default rootReducers;
