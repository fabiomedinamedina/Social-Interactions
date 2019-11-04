import React from 'react'

const Tweet = props => {
  return(
    <div className="container">
      {
        props.tweets.map((el, idx) => (
          <div className="row shadow" key={idx} style={style.box}>
            <div className="col-1 lessPad" style={style.imgContainer}>
              <img src={el.user.profile_image_url} style={style.imgUser} alt="profile" className="img-fluid" />
            </div>
            <div className="col-9 lessPad">
              <div className="container">
                <div className="row">
                  <div className="col-10">
                    <p className="h5">{ el.user.name } <span className="text-muted">@{ el.user.screen_name }</span></p>
                  </div>
                  <div className="col-10">
                    <p className="text-left">{ el.text }</p>
                  </div>
                  <div className="col-10"></div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

const style = {
  imgUser: { borderRadius: '50%' },
  box: { 
    border: '1px solid rgba(0,0,0,.125)',
    borderRadius: '5px',
    marginBottom: '0.5rem',
    padding: '15px'
  },
  imgContainer: { maxWidth: '60px' }
}

export default Tweet