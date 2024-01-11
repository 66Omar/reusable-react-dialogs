import React, { useEffect, useState } from 'react'
import { useDialogContext } from '../contexts/DialogContext'
import { Post, PostProps } from '../types/PostTypes'


const Posts: React.FC<{}> = () => {
    const [posts, setPosts] = useState<Post[]>([
    ])
  const [loading, setLoading] = useState(false)

  async function fetchPosts() {
      setLoading(true)
        const response = await fetch("https://dummyjson.com/posts", {
          method: "GET",
        });
        const data = await response.json()
        if (response.status === 200) {
            setPosts(data.posts)
        }
      setLoading(false)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    function onDelete(postId: any) {
        setPosts(prev => prev.filter((post) => post.id !== postId))
    }


  return (
      loading ? (<div>Loading...</div>) :
      <main>
        {posts.map((post) => (
          <PostComponent key={post.id} post={post} onDelete={onDelete} />
        ))}
      </main>
    );
}

const PostComponent: React.FC<PostProps> = ({ post, onDelete }) => {
    const { setDialog } = useDialogContext();

    function showDialog() { 
        setDialog({
          header: "Delete Confirmation",
          body: `Are you sure you want to delete this post? (postId: ${post.id})`,
          positive: { text: "Delete", action: deletePost },
          negative: { text: "Cancel", action: () => null },
        });
      
      }

    function deletePost() {
        onDelete(post.id)
    }

    return (
      <article className="card p-3 mb-3">
        <div className="card-body">
          <h3 className="card-title">
            {post.title} ({post.id})
          </h3>
          <p className="card-text">{post.body}</p>
          <div className="d-flex mb-3">
            {post.tags.map((tag, index) => (
              <div key={index} className="text-info p-1" style={{ fontStyle: "italic" }}>
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </div>
            ))}
          </div>
          <button className="btn btn-danger" onClick={showDialog}>
            Delete
          </button>
        </div>
      </article>
    );
} 

export default Posts