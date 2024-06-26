import React, { useEffect, useState, useRef, useCallback } from "react"
import "./photos.scss"
import { useParams } from "react-router-dom"
import BreadCrumb from "../breadCrumb/breadCrumb"

const Photos = () => {
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const { albumId } = useParams()
  const observer = useRef()

  const fetchPhotos = useCallback(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_page=${page}&_limit=20`
    )
      .then((response) => response.json())
      .then((data) => {
        setPhotos((prevPhotos) => [...prevPhotos, ...data])
        if (data.length < 20) {
          setHasMore(false)
        }
      })
      .catch((error) => {
        console.error("Photos error", error)
      })
  }, [albumId, page])

  useEffect(() => {
    setPhotos([]) // Clear photos when albumId changes
    setPage(1) // Reset page to 1 when albumId changes
    setHasMore(true) // Reset hasMore flag
  }, [albumId])

  useEffect(() => {
    fetchPhotos()
  }, [fetchPhotos])

  const lastPhotoElementRef = useCallback(
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
    <div className="photosSection">
      <BreadCrumb link="/albums" title="Мои альбомы" />
      <div className="title">Album's name</div>

      <div className="photosContainer">
        {photos.map((item, index) => {
          if (photos.length === index + 1) {
            return (
              <img
                ref={lastPhotoElementRef}
                key={item.id}
                src={item.url}
                alt={item.title}
                className="photo"
              />
            )
          } else {
            return (
              <img
                key={item.id}
                src={item.url}
                alt={item.title}
                className="photo"
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default Photos
