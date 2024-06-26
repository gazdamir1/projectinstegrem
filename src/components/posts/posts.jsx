import React, { useEffect, useState, useRef, useCallback } from "react"
import "./posts.scss"
import Comments from "./comments/comments"

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const observer = useRef()

  const fetchPosts = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((response) => response.json())
      .then((data) => {
        setPosts((prevPosts) => [...prevPosts, ...data])
        if (data.length === 0 || data.length < 10) {
          setHasMore(false)
        }
      })
      .catch((error) => {
        console.error("Posts error", error)
      })
  }, [page])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const lastPostElementRef = useCallback(
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
    <div className="posts">
      <div className="titleForm">Посты</div>
      {posts.map((post, index) => {
        if (posts.length === index + 1) {
          return (
            <div ref={lastPostElementRef} key={post.id} className="post">
              <div className="title">{post.title}</div>
              <div className="description">{post.body}</div>
              <Comments postId={post.id} />
            </div>
          )
        } else {
          return (
            <div key={post.id} className="post">
              <div className="title">{post.title}</div>
              <div className="description">{post.body}</div>
              <Comments postId={post.id} />
            </div>
          )
        }
      })}
    </div>
  )
}

export default Posts
