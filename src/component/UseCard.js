import React from 'react'

const UseCard = ({post}) => {
  return (
    <div>
     <h1> {post.name} </h1>
     <p> {post.username} </p>
     <p> {post.address.city} </p> 
    </div>
  )
}

export default UseCard
