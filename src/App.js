import React from 'react';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Layout

// pages
import Coming_soon from './components/Coming_soon';

const appHistory = {
  basename: process.env.PUBLIC_URL
};
const history = createBrowserHistory(appHistory);
function App() {
 
  return (
    <div className="page">
      <Router basename={process.env.PUBLIC_URL} history={history}>  
        <div id="preloader">
          <div id="status">&nbsp;</div>
        </div>
        <Route exact path='/' component={ Coming_soon } />
    </Router>  
    </div> 
  );
 }

export default App;
