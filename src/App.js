import React from 'react';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/login/RegisterForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="auth-form-container">
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
}

export default App;
