import React from "react"
import "./albumsPage.scss"
import Header from "../../components/header/header"
import Menu from "../../components/menu/menu"

const AlbumsPage = () => {
  return (
    <>
      <Header></Header>
      <div className="wrapper">
        <div className="mainBlock">
          <Menu></Menu>
        </div>
      </div>
    </>
  )
}

export default AlbumsPage
