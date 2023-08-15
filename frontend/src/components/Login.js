import { useState } from 'react';
import AuthForm from './AuthForm';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEmail('');
    setPassword('');
    onLogin({ email, password });
  }

  return <AuthForm handleSubmit={handleSubmit} email={email} handleChangeEmail={handleChangeEmail} password={password} handleChangePassword={handleChangePassword} title="Вход" btnText="Войти" />;
}

export default Login;
