import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import RouterConfig from './navigation/RouterConfig';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <RouterConfig />
    </BrowserRouter>
  );
}

export default App;
