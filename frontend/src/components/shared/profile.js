import React from 'react'
import tweet from '../../images/tweet.png'

const style = {
  name: {
    fontSize: '1.3rem',
    marginBottom: 0
  },
  username: {
    fontSize: '1rem',
    marginBottom: 0,
    color: 'gray'
  },
  main: {
    marginLeft: '1rem',
    marginRight: '2.5rem',
    width: '200px'
  },
  img: {
    borderRadius: '50%'
  },
  imgTw: {
    width: '2rem'
  }
}

export const Profile = props => {
  return(
    <div className="d-flex flex-column justify-content-start" style={style.main}>
      <div className="text-center">
        <img src={props.photo} alt={props.username} style={style.img} />
      </div>
      <div className="text-center">
        <p style={style.name}>{props.name}</p>
      </div>
      <div className="text-center">
        <p style={style.username}>@{props.username}</p>
      </div>
      <div className="text-center mt-5">
        <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#modalTweet">
          <img src={tweet} alt="tweet" style={ style.imgTw }/>
          Tweet
        </button>
      </div>
    </div>
  )
}
