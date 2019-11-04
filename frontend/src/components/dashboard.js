import React from 'react'
import api from '../services/api'
import Menu from './shared/menu'
import ListOfTweets from './listOfTweets'
import {Profile} from './shared/profile'

class Dashboard extends React.Component{

  constructor(){
    super()
    this.state = {
      authenticated: false,
      user: {}
    }
  }

  componentDidMount(){
    api.getLoginTw()
      .then(res => {
        if(res.data.status) this.setState({ authenticated: true, user: res.data.user })
        else window.open('http://localhost:3000/', '_self')
      })
      .catch(e => console.error(e))
  }

  render(){
    return(
      <React.Fragment>
        <Menu />
        <div className="d-flex flex-row">
          <Profile {...this.state.user} />
          <ListOfTweets />
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard