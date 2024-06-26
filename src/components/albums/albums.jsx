import React, { useCallback, useEffect, useRef, useState } from "react"
import "./albums.scss"
import Album from "./album/album"

const Albums = () => {
  const [albums, setAlbums] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const observer = useRef()

  const fetchAlbums = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=20`)
      .then((response) => response.json())
      .then((data) => {
        setAlbums((prevAlbums) => [...prevAlbums, ...data])
        if (data.length < 20) {
          setHasMore(false)
        }
      })
      .catch((error) => {
        console.error("Albums error", error)
      })
  }, [page])

  useEffect(() => {
    fetchAlbums()
  }, [fetchAlbums])

  const lastAlbumsElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [hasMore]
  )

  return (
    <div className="albumBlock">
      <div className="title">Альбомы</div>
      <div className="albumsContainer">
        {albums.map((album, index) => {
          if (albums.length === index + 1) {
            return (
              <Album ref={lastAlbumsElementRef} key={album.id} item={album} />
            )
          } else {
            return <Album key={album.id} item={album} />
          }
        })}
      </div>
    </div>
  )
}

export default Albums
