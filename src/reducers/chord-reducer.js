const initialState = {
    chord: null,
    chord_audio: null
};

const chordReducer = function(state=initialState, action) {
    switch(action.type) {
        case 'LOAD_CHORD':
            return Object.assign({}, state, {chord: action.chord});

        case 'LOAD_CHORD_AUDIO':
        	return Object.assign({}, state, {chord_audio: action.chord_audio});
    }

    return state;
};

export default chordReducer;