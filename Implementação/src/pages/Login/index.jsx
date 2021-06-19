import React from 'react';

import shoppingImage from './images/login.svg';

import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { Link, Router } from 'react-router-dom';

import './styles.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let error = false;
    
    if (!isEmail(email)) {
      error = true;
      toast.error('E-mail inválido');
    }

    if (password.length < 3 || password > 100) {
      error = true;
      toast.error('Senha incorreta');
    }

    if (error) return;
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="image-cover">
          <img src={shoppingImage} alt="" />
        </div>
        <div className="login-form">
          <h1>Login</h1>
          <form action="#" className="form">
            <div className="label-inputs">
              
              <input 
                type="email" 
                id="email" 
                placeholder="E-mail" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
          
              <input 
                type="password" 
                id="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="button"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
    </div>
    </>
  );
}
