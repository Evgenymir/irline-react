import { combineReducers } from 'redux';

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
            // console.log({
            //     ...state,
            //     stagesOfCooperation: {
            //         ...stagesOfCooperation,
            //         popupContent: content,
            //         popupUiState: { isActive: true },
            //     },
            // });
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
            console.log('11111');
            // console.log({
            //     ...state,
            //     stagesOfCooperation: {
            //         ...stagesOfCooperation,
            //         popupContent: content,
            //         popupUiState: { isActive: true },
            //     },
            // });
            return {
                ...state,
                stagesOfCooperation: {
                    ...stagesOfCooperation,
                    popupUiState: { isActive: false },
                },
            };
        }
        default:
            return state;
    }
};

const rootReducers = combineReducers({
    initState,
});

export default rootReducers;
