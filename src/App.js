import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PizzaForm from './components/PizzaForm';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/pizza'>
          <PizzaForm />
        </Route>
      </Switch>
    </>
  );
};
export default App;
