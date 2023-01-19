import React, { useEffect, useState } from 'react'
import UseCard from './UseCard'
import axios from  'axios'
const UseListe = () => {
    const [post,setPost]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log('res',res)
            setPost(res.data)
.catch (err=>console.log(err))
        })
    } , [])
  return (
    <div>
   
    {post.map((e)=> (<UseCard post={e}/>))}
    </div>
  )
}

export default UseListe
