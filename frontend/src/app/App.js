import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

import MainLayout from '../components/layout/Main';
import { GlobalStyle } from './style';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
