import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/gerente" />
        <Route path="/vendedor" />
      </Switch>
      <ToastContainer autoClose={3000} className="toast-container" />
    </BrowserRouter>
  );
}
