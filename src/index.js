import {Provider} from 'react-redux';
import store from './store/index';
import {Router, browserHistory} from 'react-router';
import router from './router';
var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
// var ChordID = require('./components/ChordID');



ReactDOM.render(
  <Provider store={store}>  
      {router}
   </Provider>,
  document.getElementById('root')
);

