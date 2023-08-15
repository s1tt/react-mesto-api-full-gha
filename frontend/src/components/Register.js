import { useState } from 'react';
import AuthForm from './AuthForm';

function Register({ onRegister }) {
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
    onRegister({ email, password });
  }

  return <AuthForm handleSubmit={handleSubmit} email={email} handleChangeEmail={handleChangeEmail} password={password} handleChangePassword={handleChangePassword} title="Регистрация" btnText="Зарегистрироваться" />;
}

export default Register;
