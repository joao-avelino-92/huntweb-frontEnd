import React from 'react';
import Router from "./routes"

import Header from './components/index'
import './styles.css'
import api from './services/api'
import Main from './pages/main'
import Routes from './routes';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
)

export default App;
