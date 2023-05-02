import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { addDoc,collection } from 'firebase/firestore'
import {auth, db}from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

interface CreateFormPost{
  title:string,
  description:string
}
export default function CreateForm() {
  const [user]=useAuthState(auth)
  const schema = yup.object().shape({
    title: yup.string().required('you must add a title'),
    description: yup.string().required('you must add a description'),
  });

  const {register,handleSubmit,formState:{errors}} = useForm<CreateFormPost>({
    resolver:yupResolver(schema)
  });

  const postRef = collection(db,"posts");

  const onCreatePost = async(data:CreateFormPost)=>{
   await addDoc(postRef,{
    ...data,
    username:user?.displayName,
    id:user?.uid
  })};

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input type="text" placeholder='Title...' {...register("title")}/>
      <p style={{color:'red'}}>{errors.title?.message}</p>
      <textarea placeholder='Description...' {...register('description')} />
      <p style={{color:'red'}}>{errors.description?.message}</p>
      <input type="submit"/>
    </form>
  )
}
