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
        default:
            return state;
    }
};

const rootReducers = combineReducers({
    initState,
});

export default rootReducers;
