import {connect}      from 'react-redux';
import store          from '../store/index';
import {loadTrainer} from "../actions/trainer-actions"
var React = require('react');
var NavLink = require('react-router-dom').NavLink;

class RenderMainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
            <div className = 'main-nav'>
              <ul className = 'nav-items'>
                <li className = 'nav-item'> 
                  <NavLink exact className = 'nav-link' 
                           activeClassName="active" to="/" 
                           onClick = {() => this.props.onSelect("chord_id") } 
                           style={this.props.selectedTrainer === "chord_id" ?
                                {borderBottom: '1px solid black'}
                                : null}>
                    Chord ID
                  </NavLink>
                </li>
                <li className = 'nav-item'> 
                  <NavLink exact className = 'nav-link' 
                           activeClassName="active" to="/ear-training" 
                           onClick = {() => this.props.onSelect("ear_training") }
                           style={this.props.selectedTrainer === "ear_training" ?
                                {borderBottom: '1px solid black'}
                                : null}>
                    Ear Training
                  </NavLink>
                </li>
              </ul>
            </div>
        );
    } 
}

const mapStateToProps = function(store) {
    return {
        selectedTrainer: store.trainerState.selectedTrainer
    };
};

export default RenderMainNav;
