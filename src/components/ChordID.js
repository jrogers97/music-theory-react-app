import '../index.css';
import CreateChord from './CreateChord';
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
    console.log("chordID props=", this.props);
    return (
      <div className = "chord-id-container"> 
        <div className = "music-square"> 
          {!this.props.chord ? 
            null :
            <CreateChord /> 
          }
        </div>
        <button id="next-button" onClick = { this.getChord }> Next </button>
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
// export default ChordID;
