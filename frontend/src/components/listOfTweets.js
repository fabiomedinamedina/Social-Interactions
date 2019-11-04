import React from 'react'
import api from '../services/api'
import Tweet from './shared/tweet'
import Loading from './shared/loading'
import PostTweet from './shared/postTweet'

class ListOfTweets extends React.Component{

  constructor(){
    super()
    this.state = {
      tweets: [],
      myTweet: ''
    }
  }

  getRefreeshTweets = () =>{
    this.setState({ tweets: [] })
    api.getTimeline({count: 100})
      .then(res => {
        if (res.data.status){
          this.setState({ tweets: res.data.timeline })
        }
      })
      .catch(e => console.error(e))
  }

  componentDidMount(){
    this.getRefreeshTweets()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleOnSubmit = e => {
    e.preventDefault()
    let { myTweet } = this.state
    api.postTweet({ myTweet })
      .then(res => {
        if(res.data.status) {
          window.$('#modalTweet').modal('hide')
          this.setState({ myTweet: '' })
          this.getRefreeshTweets()
        }
      })
      .catch(e => console.log(e))
  }

  render(){
    let { tweets } = this.state 
    return(
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <button type="button" className="btn btn-link" onClick={this.getRefreeshTweets}>Refresh Tweets</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12" style={style.tabla} >
            {
              tweets.length > 0 ? (
                <Tweet 
                  tweets={ this.state.tweets }
                />
              ):
              (
                <Loading />
              )
            }
          </div>
        </div>
        <PostTweet 
          submit={this.handleOnSubmit}
          change={this.handleChange}
        />
      </div>
    )
  }
}

const style = {
  tabla: { 
    overflow: 'scroll', 
    height: 'calc(100vh - 50px)'
  }
}
export default ListOfTweets