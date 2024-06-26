import React from "react"
import "./header.scss"
import logo from "../../images/logotype-svgrepo-com.svg"
import profileAvatarImg from "../../images/avatar-circus-magician-svgrepo-com.svg"
import ThemeSwitcher from "../theme-provider/ThemeSwitcher"
import { useTheme } from "../theme-provider/ThemeContext"

const Header = () => {
  const { theme } = useTheme()
  return (
    <div className="header">
      <div className="wrapper">
        <img
          src={logo}
          style={{ filter: theme === "light" ? "invert(0)" : "invert(100%)" }}
          alt="logo"
          className="logo"
        />

        <div className="profile">
          <ThemeSwitcher />

          <div className="profileText">Profile</div>
          <img
            src={profileAvatarImg}
            style={{ filter: theme === "light" ? "invert(0)" : "invert(100%)" }}
            alt="profileAvatarImg"
            className="profileAvatarImg"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
