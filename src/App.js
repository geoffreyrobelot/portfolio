import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import { Project1, Project2, Project3, Project4 } from './Pages/Projects';
import Contact from './Pages/Contact';
import { FormationDut, FormationBts, FormationCda, FormationCde } from './Pages/Formations';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const App = () => {
  

  return (
   <> 
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/project-1' component={Project1} />
      <Route exact path='/project-2' component={Project2} />
      <Route exact path='/project-3' component={Project3} />
      <Route exact path='/project-4' component={Project4} />
      <Route exact path='/formation-1' component={FormationDut} />
      <Route exact path='/formation-2' component={FormationBts} />
      <Route exact path='/formation-3' component={FormationCda} />
      <Route exact path='/formation-4' component={FormationCde} />
      <Route exact path='/contact' component={Contact} />
      <Redirect to='/' />
    </Switch>
  </>
  )
}

export default App
