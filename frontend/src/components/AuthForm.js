import { Link, useLocation } from 'react-router-dom';

function AuthForm({ handleSubmit, email, handleChangeEmail, password, handleChangePassword, title, btnText }) {
  const { pathname } = useLocation();
  return (
    <section className="auth">
      <h2 className="auth__title">{title}</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__inputs">
          <label htmlFor="auth__email">
            <input id="auth__email" className="auth__input" value={email} type="email" placeholder="Email" onChange={handleChangeEmail} />
          </label>
          <label htmlFor="auth__password">
            <input id="auth__password" className="auth__input" value={password} type="password" placeholder="Пароль" onChange={handleChangePassword} />
          </label>
        </div>
        <button className="auth__btn" type="submit">
          {btnText}
        </button>
      </form>
      {pathname === '/sign-up' && (
        <p className="auth__text">
          Уже зарегистрированы?
          <Link className="auth__text-link" to={'/sign-in'}>
            Войти
          </Link>
        </p>
      )}
    </section>
  );
}

export default AuthForm;
