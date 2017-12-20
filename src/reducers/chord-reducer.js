const initialState = {
    chord: null
};

const chordReducer = function(state=initialState, action) {
    switch(action.type) {
        case 'LOAD_CHORD':
            return Object.assign({}, state, {chord: action.chord});
    }

    return state;
};

export default chordReducer;