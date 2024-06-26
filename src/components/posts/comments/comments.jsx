import React, { useState } from "react"
import "./comments.scss"
import { useTheme } from "../../theme-provider/ThemeContext"
import profileAvatarImg from "../../../images/avatar-circus-magician-svgrepo-com.svg"

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showComments, setShowComments] = useState(false)

  const handleToggleComments = () => {
    if (!showComments) {
      setLoading(true)
      setError(null)
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok")
          }
          return response.json()
        })
        .then((data) => {
          setComments(data)
          setLoading(false)
        })
        .catch((error) => {
          console.error("Comments error", error)
          setError(error.message)
          setLoading(false)
        })
    }
    setShowComments(!showComments)
  }
  const { theme } = useTheme()

  return (
    <div className="comments">
      <span className="commentsButton" onClick={handleToggleComments}>
        {showComments ? "Скрыть комментарии" : "Показать комментарии"}
      </span>
      {loading && <div>Loading comments...</div>}
      {error && <div>Error loading comments: {error}</div>}
      {showComments &&
        !loading &&
        !error &&
        comments.map((comment) => (
          <div key={comment.id} className="comment">
            <div className="comment-email">
              <img
                src={profileAvatarImg}
                style={{
                  filter: theme === "light" ? "invert(0)" : "invert(100%)",
                }}
                alt="profileAvatarImg"
                className="profileAvatarImg"
              />

              {comment.email}
            </div>
            <div className="comment-body">{comment.body}</div>
          </div>
        ))}
    </div>
  )
}

export default Comments
