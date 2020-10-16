import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
    loading: false,
    error: null,
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
        case 'STAGES_OF_COOPERATION_OPEN_POPUP': {
            const { content } = action.payload;
            const { stagesOfCooperation } = state;
            return {
                ...state,
                stagesOfCooperation: {
                    ...stagesOfCooperation,
                    popupContent: content,
                    popupUiState: { isActive: true },
                },
            };
        }
        case 'STAGES_OF_COOPERATION_CLOSE_POPUP': {
            const { stagesOfCooperation } = state;
            return {
                ...state,
                stagesOfCooperation: {
                    ...stagesOfCooperation,
                    popupUiState: { isActive: false },
                },
            };
        }
        case 'OPEN_POPUP_FORM': {
            const { UIState } = state;
            const { name } = action.payload;
            return {
                ...state,
                UIState: {
                    ...UIState,
                    popupForm: {
                        isActive: true,
                        nameForm: name,
                    },
                },
            };
        }
        case 'CLOSE_POPUP_FORM': {
            const { UIState } = state;

            return {
                ...state,
                UIState: {
                    ...UIState,
                    popupForm: {
                        isActive: false,
                        nameForm: '',
                    },
                },
            };
        }
        default:
            return state;
    }
};

const rootReducers = combineReducers({
    initState,
    form: formReducer,
});

export default rootReducers;
