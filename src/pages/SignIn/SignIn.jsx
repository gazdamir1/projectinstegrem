import React from "react"
import "./SignIn.scss"
import logo from "../../images/logotype-svgrepo-com.svg"
import { Link, useNavigate } from "react-router-dom"
import { useTheme } from "../../components/theme-provider/ThemeContext"

const SignIn = () => {
  const navigate = useNavigate()

  const loginHandler = () => {
    navigate("/albums")
  }
  const { theme } = useTheme()
  return (
    <div className="signIn">
      <form className="signInForm">
        <img
          src={logo}
          style={{ filter: theme === "light" ? "invert(0)" : "invert(100%)" }}
          alt="logo"
          className="signFormlogo"
        />
        <div className="signInTitle">Авторизация</div>

        <label className="signLabel" htmlFor="email">
          <div>Введите email</div>
          <input className="signInput" type="text" />
        </label>

        <label className="signLabel" htmlFor="password">
          <div>Введите пароль</div>
          <input className="signInput" type="password" minLength={8} />
        </label>

        <button className="enterButton" onClick={loginHandler}>
          Войти
        </button>

        <Link className="regButton" to={"/registration"}>
          Регистрация
        </Link>
      </form>
    </div>
  )
}

export default SignIn
