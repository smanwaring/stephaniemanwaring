
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';



/*------ COMPONENTS/CONTAINERS ------ */
import Root from './components/root';
import Homepage from './components/homepage/homepage.component';
import About from './components/about/about.component';
import Presentations from './components/presentations/presentation.component';
import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';
import Resume from './components/resume/resume';



ReactDOM.render(
  <Provider store={store}>
	    <Router history={browserHistory}>
			<Route path="/"component={Root}>
				<Route path="/hello" component={Homepage}/>
				<Route path="/about" component={About}/>
				<Route path="/presentations" component={Presentations}/>
				<Route path="/projects" component={Projects}/>
				<Route path="/contact" component={Contact}/>
				<Route path="/resume" component={Resume}/>
				<IndexRoute component={Homepage}/>
			</Route>
		</Router>
  </Provider>,
  document.getElementById('app'));
