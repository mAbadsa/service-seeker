import React from 'react';
import AuthProvider from '../Context/Authentication';

import './style.css';

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <h1>service seeker</h1>
      </div>
    </AuthProvider>
  );
};

export default App;
