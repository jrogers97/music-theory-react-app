import '../index.css';
import ReactAudioPlayer from 'react-audio-player';
import store from '../store/index';
import {connect} from 'react-redux';
import {loadChordAudio} from '../actions/chord-actions';
import {audio_chords} from '../util/audio_chords.js';
import EarTrainingAnswers from './EarTrainingAnswers';
var React = require('react');

class EarTraining extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {};
	}

	componentDidMount() {
		this.getChordAudio();
	}

	getChordAudio() {
		var random_chord = audio_chords[Math.floor(Math.random() * audio_chords.length)];
		store.dispatch(loadChordAudio(random_chord));
		console.log('got chord audio', random_chord);
	}

   render() {
   	if (this.props.chord_audio) {
	   	var path = this.props.chord_audio.path;
	   	var audio_file = require("../util/audio/" + path);
	   }

    return (
	 <div className = "ear-training-container">
	 	<div id="header-container"> 
	 		<p id="header"> Identify the chord quality.</p> 
 		</div>
     	<div className = "music-square"> 
	     	<div id="audio-container">
		     	<div id="play-button-container"> 
			     	<audio
			     	  id="player"
					  src= {audio_file} 
					   />
				     <button id = "play-button" 
				     		 onClick={ function() { document.getElementById('player').pause();
													document.getElementById('player').currentTime = 0;
													document.getElementById('player').play()}}> 
					 </button>
				 </div>
		
		    </div>
		</div>
		<div className = "answer-area">
          {!this.props.chord_audio ?
            null :
            <EarTrainingAnswers />
          }
        </div>
        <div className = "next-button-container">
          <button id="next-button" onClick = { this.getChordAudio }> Next </button>
        </div>
    </div>
    );
  }
}

const mapStateToProps = function(store) {
    return {
        chord_audio: store.chordState.chord_audio,
    };
};

export default connect(mapStateToProps)(EarTraining);

