import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import './App.css';
import Feedback from './Feedback';
import Home from './Home';
import Jobs from './Jobs';
import EmployerFeedback from './EmployerFeedback';

class App extends React.Component {
  render() {
    return (
      <div>
      <ul>
        <li><Link exact to="/">Home Page</Link></li>
        <li><Link exact to="/feedback">Feedback</Link></li>
        <li><Link exact to="/jobs">Jobs</Link></li>
        <li> <Link exact to="/efeedback">Employer Feedback</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/feedback" component={Feedback}/>
          <Route exact path="/jobs" component={Jobs}/>
          <Route exact path="/efeedback" component={EmployerFeedback}/>

          </Switch>
      
      </div>
      
    );
  }
}
export default App;
