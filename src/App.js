import React from 'react';
import { Header } from './componets';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';


function App() {

  return (
    <div className="wrapper">
    <Header/>
    <div className="content">
     <Route path="/" component={Home} exact />
     <Route path="/Cart" component={Cart} exact />
    </div>
  </div>
  );
}

export default App;
