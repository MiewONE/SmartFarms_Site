import React from 'react';
import Login from './components/Login'
import Notfound from './components/Notfound'
import Home from './components/Home'
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <div>
        <Paper elevation={3}>
          <Switch>
            <Route exact path="/Login" component={Login}/>
            <Route path="/Home" component={Home}/>
            <Route component={Notfound}/>
          </Switch>
        </Paper>
        
      </div>
    </Router>

  );
};

export default App;