import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { Post as IPost } from './main'
import { auth, db } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect, useState } from 'react'
interface Props {
  post: IPost
}
interface Like {
  userId: string
}
export const Post = (props: Props) => {
  const { post } = props
  const [user] = useAuthState(auth)

  const [likes, setLikes] = useState<Like[] | null>(null)

  const likesRef = collection(db, 'likes')
  const likesDoc = query(likesRef, where('postId', '==', post.id))
  const getLikes = async () => {
    const data = await getDocs(likesDoc)
    setLikes(data.docs.map((doc) => ({ userId: doc.data().userId })))
  }

  const addLike = async () => {
    try {
      await addDoc(likesRef, {
        userId: user?.uid,
        postId: post.id,
      })
      if (user) {
        setLikes((prev) =>
          prev ? [...prev, { userId: user.uid }] : [{ userId: user.uid }]
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

  const hasUserLiked = likes?.find((like) => like.userId === user?.uid)
  useEffect(() => {
    getLikes()
  }, [])
  return (
    <div>
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="body">
        <p>{post.description}</p>
      </div>
      <div className="footer">
        <p>@{post.username}</p>
        <button onClick={addLike}>
          {hasUserLiked ? <>&#128078;</> : <> &#128077;</>}
        </button>
        {likes && <p>Likes {likes?.length}</p>}
      </div>
    </div>
  )
}
