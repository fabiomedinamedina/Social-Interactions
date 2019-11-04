import React from 'react'
import logo from '../../images/logo.png'

class Menu extends React.Component{

  _handleLogOut = () => {
    window.open('http://localhost:3100/api/tw/logout', '_self')
  }

  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/feed">
          <img src={logo} height="30" alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button type="button" className="btn btn-link" onClick={this._handleLogOut}>LogOut</button>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Menu