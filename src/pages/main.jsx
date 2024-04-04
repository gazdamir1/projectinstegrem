import React from "react"
import Header from "../components/header/header"
import Posts from "../components/posts/posts"
import Menu from "../components/menu/menu"
import "./main.scss"

const Main = () => {
  return (
    <>
      <Header></Header>
      <div className="wrapper">
        <div className="mainBlock">
          <Menu></Menu>
          <Posts></Posts>
        </div>
      </div>
    </>
  )
}

export default Main
