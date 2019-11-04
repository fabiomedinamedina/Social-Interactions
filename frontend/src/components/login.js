import React from 'react'
import imgTw from '../images/sign-in-twitter.png'
import logo from '../images/logo.png'

class Login extends React.Component {
  
  constructor(){
    super()
    this.state = {
      user: {},
      error: null,
      authenticated: false
    }
  }

  _loginTwitter = () => {
    window.open('http://localhost:3100/api/tw/login', '_self')
  }

  render(){
    return(
      <React.Fragment>
        <div className="d-flex flex-column justify-content-center align-items-center" style={style.box}>
          <img src={logo} alt="Logo"/>
          <button type="button" className="btn btn-light">
            <img src={imgTw} alt="twitter" onClick={ this._loginTwitter }/>
          </button>
        </div>
      </React.Fragment>
    )
  }
}

const style = {
  box: { height: '100%' }
}

export default Login
