import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import PizzaForm from './components/PizzaForm';
import OrderComplete from './components/OrderComplete';

const App = () => {
  const [order, setOrder] = useState(null);
  let history = useHistory();

  const submit = (values) => {
    axios
      .post('https://reqres.in/api/users', values)
      .then((res) => {
        setOrder(res.data);
        history.push('/order');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/pizza'>
          <PizzaForm order={order} submit={submit} />
        </Route>
        <Route path='/order'>
          {order ? <OrderComplete order={order} /> : <Redirect to='/' />}
        </Route>
      </Switch>
    </>
  );
};
export default App;
