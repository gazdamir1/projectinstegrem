import React from "react"
import Header from "../components/header/header"
import Menu from "../components/menu/menu"
import "./main.scss"

const Main = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="wrapper">
        <div className="mainBlock">
          <div className="section">{children}</div>

          <Menu></Menu>
        </div>
      </div>
    </>
  )
}

export default Main
