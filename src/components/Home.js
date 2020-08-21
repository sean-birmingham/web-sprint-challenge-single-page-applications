import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = ({ order }) => {
  return (
    <div>
      <Navbar />
      <h2>Your favorite food, delivered while coding</h2>
      <Link to='/pizza'>
        <button>Pizza?</button>
      </Link>
      {order ? (
        <div>
          <h3>Name: {order.name}</h3>
          <p>Size: {order.size}</p>
          {!!order.toppings && !!order.toppings.length && (
            <div>
              Toppings:
              <ul>
                {order.toppings.map((topping, index) => (
                  <li key={index}>{topping}</li>
                ))}
              </ul>
            </div>
          )}
          <p>Instructions: {order.instructions}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
