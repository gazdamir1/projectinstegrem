import React from "react"
import "./Registration.scss"
import logo from "../../images/logotype-svgrepo-com.svg"
import { useNavigate, Link } from "react-router-dom"
import { useTheme } from "../../components/theme-provider/ThemeContext"

const Registration = () => {
  const navigate = useNavigate()

  const loginHandler = () => {
    navigate("/albums")
  }
  const { theme } = useTheme()
  return (
    <div className="registration">
      <form className="registrationForm">
        <img
          src={logo}
          style={{ filter: theme === "light" ? "invert(0)" : "invert(100%)" }}
          alt="logo"
          className="registrationFormlogo"
        />
        <div className="registrationTitle">Регистрация</div>

        <label className="registrationLabel" htmlFor="email">
          Введите email
          <input className="registrationInput" type="text" />
        </label>

        <label className="registrationLabel" htmlFor="email">
          Введите имя
          <input className="registrationInput" type="text" />
        </label>

        <label className="registrationLabel" htmlFor="password">
          Введите пароль
          <input className="registrationInput" type="text" />
        </label>

        <label className="registrationLabel" htmlFor="email">
          Введите пароль повторно
          <input className="registrationInput" type="text" />
        </label>

        <button className="regButton" onClick={loginHandler}>
          Зарегистрироваться
        </button>

        <Link className="enterButton" to={"/sign-in"}>
          Войти
        </Link>
      </form>
    </div>
  )
}

export default Registration
