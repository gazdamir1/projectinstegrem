import React from "react"
import styles from "./header.scss"
import logo from "../../images/logotype-svgrepo-com.svg"
import profileAvatarImg from "../../images/avatar-circus-magician-svgrepo-com.svg"

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <img src={logo} alt="logo" className="logo" />
        <div className="profile">
          <div className="profileText">Profile</div>
          <img
            src={profileAvatarImg}
            alt="profileAvatarImg"
            className="profileAvatarImg"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
