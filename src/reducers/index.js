import {combineReducers} from 'redux';
import chordReducer from './chord-reducer';
import trainerReducer from './trainer-reducer';

//Combine reducers
var reducers = combineReducers({
    chordState: chordReducer,
    trainerState: trainerReducer
});

export default reducers;