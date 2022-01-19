import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainFrame from './MainFrame';
export const App = () => (
  <div>
    <BrowserRouter>
    <MainFrame appName="EC-Line"/>
    </BrowserRouter>
  </div>
);
