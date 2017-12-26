import ReactDOM from 'react-dom';
import React from 'react';
import Notes from './RenderStaff';
import Vex from 'vexflow';
import {connect} from 'react-redux';
import store from '../store/index';
// import {chords} from '../util/chords.js';
const {Accidental, StaveNote} = Vex.Flow;

// const chord = chords[Math.floor(Math.random() * chords.length)];

class CreateChord extends React.Component {
	constructor(props) {
		super(props);
        this.state = {};
	}

	render() {
	
		const chord = this.props.chord;
		const acc = chord.accidentals;
		var chord_no_acc = new StaveNote({
			keys: chord.keys,
			duration: "w" 
		   }); 

		var count=0;
		while (count<chord.accidentals.length) {
			chord_no_acc = chord_no_acc.addAccidental(acc[count][0], new Accidental(acc[count][1]));
			count++;
		}

		const chord_final = [chord_no_acc];
	
		return (
		  <div>
	        <Notes chord={chord_final} />
	      </div>
		)
	  }
	 }

 const mapStateToProps = function(store) {
    return {
        chord: store.chordState.chord,
    };
};

export default connect(mapStateToProps)(CreateChord);