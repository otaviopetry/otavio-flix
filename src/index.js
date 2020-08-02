import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddVideo from './pages/cadastro/Video';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path ="/" exact component={App} />
      <Route path ="/cadastrar-video" component={AddVideo} />
      <Route component={() => { return <h1>404 - Not found.</h1>}} />
    </Switch>
  </BrowserRouter>,  
  document.getElementById('root')
);
