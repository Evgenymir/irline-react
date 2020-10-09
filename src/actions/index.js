import axios from 'axios';

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

    axios.get('./AppData.json')
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
