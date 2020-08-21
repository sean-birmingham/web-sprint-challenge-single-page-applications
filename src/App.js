import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import PizzaForm from './components/PizzaForm';

const App = () => {
  const [order, setOrder] = useState(null);

  const submit = (values) => {
    axios
      .post('https://reqres.in/api/users', values)
      .then((res) => {
        console.log(values);
        console.log(res.data);
        setOrder(res.data);
      })
      .catch((err) => {
        debugger;
      });
  };

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home order={order} />
        </Route>
        <Route path='/pizza'>
          <PizzaForm submit={submit} />
        </Route>
      </Switch>
    </>
  );
};
export default App;
