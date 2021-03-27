import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Showcase from './components/Showcase'
import Header from './components/Header'
import Project from './components/Project'
import Hire from './components/Hire'

function App() {
  return (
    <Router>
    <Header/>
      <Route path="/" exact>
        <Showcase/>
      </Route>
      <Route path="/projects" exact>
        <Project/>
      </Route>
      <Route path="/hire" exact>
        <Hire/>
      </Route>
    </Router>
  );
}

export default App;
