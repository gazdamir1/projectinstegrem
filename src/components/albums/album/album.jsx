import React, { useEffect, useState, forwardRef } from "react"
import "./album.scss"
import { Link } from "react-router-dom"

const Album = forwardRef((props, ref) => {
  const [photo, setPhoto] = useState([])

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${
        props.item.id
      }&id=${props.item.id * 50 - 49}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPhoto(data)
      })
      .catch((error) => {
        console.error("Albums error", error)
      })
  }, [props.item.id])

  return (
    <Link to={`/albums/${props.item.id}`} className="albumSquare" ref={ref}>
      <div className="title">{props.item.title}</div>
      {photo.map((item) => (
        <img key={item.id} src={item.url} alt={item.title} className="photo" />
      ))}
    </Link>
  )
})

export default Album
