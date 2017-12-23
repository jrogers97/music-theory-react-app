import '../index.css';
import store from '../store/index';
import {connect} from 'react-redux';
var React = require('react');

class Answers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		// this.revealAnswers = this.revealAnswers.bind(this);
	}

	componentDidUpdate() {
		var old_answers = document.getElementsByClassName("answer");
		Array.prototype.forEach.call(old_answers, function(item) {
			item.classList.remove('correct-answer');
			item.classList.remove('incorrect-answer');
		})
		
	}

	static revealAnswers(correct_answer) {
		var answers = document.getElementsByClassName("answer");
		
		console.log("correct answer: ",correct_answer);
		Array.prototype.forEach.call(answers, function(item) {
    		if (item.innerText === correct_answer) {
    			document.getElementById(correct_answer).classList.add('correct-answer');

    		} else {
    			document.getElementById(item.innerText).classList.add('incorrect-answer');

    		}

		});
	}

	render() {
		const chord = this.props.chord;
		const correct_answer = chord.quality;
		
		if (chord.is7) {
			var answers = ["Major 7", "Minor 7", "Dominant 7", "Half-Diminished 7", "Diminished 7"]
		} else {
			var answers = ["Major", "Minor", "Augmented", "Diminished"]
		};

// onClick incorrect => add class "incorrect", styled .incorrect = red, opaque, no cursor pointer, x next to answer
// onClick correct => add class "correct", styled .correct = green, all others opaque, no cursor pointer for any, check next to answeer

//give each li ID of chord quality, getElementById to add class
		return (
			<ul className = "answers-list">
	          {answers.map(function(item,index) {
	          	return (
	          		<li className="answer"
	          			id={item}
	          			key={item}
	          			onClick = {() => Answers.revealAnswers(correct_answer) }>
          				<span>{item}</span>
          			</li>	
	          	);
	          })}
        	</ul>
			);
	}
}

const mapStateToProps = function(store) {
	return {
		chord: store.chordState.chord
	};
};

export default connect(mapStateToProps)(Answers);