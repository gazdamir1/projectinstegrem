import React from "react"
import "./menu.scss"
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className="menu">
      <Link className="menuButton" to={"/"}>
        Posts
      </Link>
      <Link className="menuButton" to={"/albums"}>
        Albums
      </Link>
    </div>
  )
}

export default Menu
