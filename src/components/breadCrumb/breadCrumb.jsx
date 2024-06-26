import React from "react"
import "./breadCrumb.scss"
import { Link } from "react-router-dom"
import arrowNext from "../../images/arrow-narrow-right-svgrepo-com.svg"
import { useTheme } from "../theme-provider/ThemeContext"

const BreadCrumb = (props) => {
  const { theme } = useTheme()
  return (
    <div className="breadCrumbContainer">
      <Link to={props.link} className="pathToPast">
        {props.title}
      </Link>
      <img
        src={arrowNext}
        style={{ filter: theme === "light" ? "invert(0)" : "invert(100%)" }}
        alt="arrowNext"
        className="arrowNext"
      />
      Альбом
    </div>
  )
}

export default BreadCrumb
