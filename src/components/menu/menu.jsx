import React from "react"
import "./menu.scss"
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className="menu">
      <Link className="menuButton" to={"/"}>
        Посты
      </Link>
      <Link className="menuButton" to={"/albums"}>
        Альбомы
      </Link>
      <Link className="menuButton" to={"/sign-in"}>
        Выход
      </Link>
    </div>
  )
}

export default Menu
