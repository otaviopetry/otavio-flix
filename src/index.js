import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddVideo from './pages/register/Video';
import AddCategory from './pages/register/Category';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path ="/" exact component={Home} />
      <Route path ="/cadastro/video" component={AddVideo} />
      <Route path ="/cadastro/categoria" component={AddCategory} />
      <Route component={() => { return <h1>404 - Not found.</h1>}} />
    </Switch>
  </BrowserRouter>,  
  document.getElementById('root')
);
