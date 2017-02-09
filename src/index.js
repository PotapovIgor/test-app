import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';
import Page4 from './components/Page4/Page4';
import './index.css';


ReactDOM.render(
  <Router history={ browserHistory }>
      <Route path="/" component={App}/>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
      <Route path="/page3" component={Page3}/>
      <Route path="/page4" component={Page4}/>
      
  </Router>,
  document.getElementById('root')
);
