import '../index.css';
import CreateChord from './CreateChord';
import ChordIDAnswers from './ChordIDAnswers';
import {connect} from 'react-redux';
import store from '../store/index';
import {loadChord} from '../actions/chord-actions';
import {chords} from '../util/chords.js';

var React = require('react');

class ChordID extends React.Component {
  constructor(props) {
        super(props);
        this.state = {};
    }

  componentDidMount() {
        this.getChord();
    }

  getChord() {
     var random_chord = chords[Math.floor(Math.random() * chords.length)];
     store.dispatch(loadChord(random_chord));
  }

  render() {
    return (
      <div className = "chord-id-container"> 
        <div id="header-container"> <p id="header"> Identify the chord quality.</p> </div>
        <div className = "music-square"> 
          {!this.props.chord ? 
            null :
            <CreateChord /> 
          }
        </div>
        <div className = "answer-area">
          {!this.props.chord ?
            null :
            <ChordIDAnswers />
          }
        </div>
        <div className = "next-button-container">
          <button id="next-button" onClick = { this.getChord }> Next </button>
        </div>
      </div> 
    );
  }
}

const mapStateToProps = function(store) {
    return {
        chord: store.chordState.chord,
    };
};

export default connect(mapStateToProps)(ChordID);