import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <h1>{props.username}</h1>
        <img src={props.avatar_url} alt={props.avatar_url} width={300}></img>
        <a href={props.html_url}>go to url</a>
    </div>
  )
}

export default Card;