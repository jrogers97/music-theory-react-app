import {connect} from 'react-redux';
import store from '../store/index';
import {loadTrainer} from "../actions/trainer-actions";
var RenderMainNav = require('./RenderMainNav');
var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function MainNav() {
    return (
      <div className = 'main-nav'>
        <ul className = 'nav-items'>
          <li className = 'nav-item'> 
            <NavLink exact activeClassName='active' className='nav-link' to='/' >
              Chord ID
            </NavLink>
          </li>
          <li className = 'nav-item'> 
            <NavLink className='nav-link' activeClassName='active' to='/ear-training'  >
              Ear Training
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }

export default MainNav;

// module.exports = MainNav;