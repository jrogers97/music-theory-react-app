import {combineReducers} from 'redux';
import chordReducer from './chord-reducer';

//Combine reducers
var reducers = combineReducers({
    chordState: chordReducer
});

export default reducers;