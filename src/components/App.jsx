import React from 'react';
import Poke from './Poke.jsx';
import '../styles/styles.css';

const App = () => {
  return (
    <div className='flex-container'>
      <div>
        <Poke />
      </div>
      <div>
        <Poke />
      </div>
    </div>
  );
};

export default App;
