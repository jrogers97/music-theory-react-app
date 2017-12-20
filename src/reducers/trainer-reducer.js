const initialState = {
    selectedTrainer: "chord_id"
};

const trainerReducer = function(state=initialState, action) {
    switch(action.type) {
        case 'LOAD_TRAINER':
            return Object.assign({}, state, {selectedTrainer: action.selectedTrainer});
    }

    return state;
};

export default trainerReducer;