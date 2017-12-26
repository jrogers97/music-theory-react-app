import '../index.css';
import store from '../store/index';
import {connect} from 'react-redux';
var React = require('react');

class EarTrainingAnswers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidUpdate() {
		var old_answers = document.getElementsByClassName("answer-list-item");
		Array.prototype.forEach.call(old_answers, function(item) {
			item.classList.remove('correct-answer');
			item.classList.remove('incorrect-answer');
		})	
	}

	static numToString(num) {
		return((num + 10).toString(36).toUpperCase());
	}

	static revealAnswers(correct_answer) {
		var answers = document.getElementsByClassName("answer");
		
		Array.prototype.forEach.call(answers, function(item) {
    		if (item.innerText === correct_answer) {
    			document.getElementById(correct_answer).classList.add('correct-answer');
    		} else {
    			document.getElementById(item.innerText).classList.add('incorrect-answer');
    		}
		});
	}

	render() {
		const chord_audio = this.props.chord_audio;
		const correct_answer = chord_audio.quality;
		
		if (chord_audio.is7) {
			var answers = ["Major 7", "Minor 7", "Dominant 7", "Diminished 7"]
		} else {
			var answers = ["Major", "Minor", "Augmented", "Diminished"]
		};

		return (
			<ul className = "answers-list">
	          {answers.map(function(item,index) {
	          	return (
	          		<li className="answer-list-item"
	          			id={item}
	          			key={item}
	          			onClick = {() => EarTrainingAnswers.revealAnswers(correct_answer) }>
	          			<span className="option-number">{EarTrainingAnswers.numToString(index) + "."}</span>
          				<span className="answer">{item}</span>
          			</li>	
	          	);
	          })}
        	</ul>
			);
	}
}

const mapStateToProps = function(store) {
	return {
		chord_audio: store.chordState.chord_audio,
	};
};

export default connect(mapStateToProps)(EarTrainingAnswers);