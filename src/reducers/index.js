import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
    loading: false,
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
};

const initState = (state = initialState, action) => {
    switch (action.type) {
        case 'FIRST_INIT_APP_STARTED': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'FIRST_INIT_APP_SUCCESS': {
            const data = action.payload;
            return {
                ...state,
                loading: false,
                ...data,
            };
        }
        case 'FIRST_INIT_APP_FAILURE': {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
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
        default: {
            return state;
        }
    }
};

const rootReducers = combineReducers({
    initState,
    uiState,
    form: formReducer,
});

export default rootReducers;
