import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h2>Your favorite food, delivered while coding</h2>
      <Link to='/pizza'>
        <button>Pizza?</button>
      </Link>
    </div>
  );
};

export default Home;
