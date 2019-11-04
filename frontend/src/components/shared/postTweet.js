import React from 'react'

const PostTweet = props =>{
  return(
    <div className="modal fade" id="modalTweet" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <form onSubmit={props.submit} className="mt-5">
              <div className="form-group">
                <textarea type="text" className="form-control" onChange={props.change} name="myTweet" placeholder="¿Que estas pensando?" rows="3"></textarea>
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-default float-right" data-dismiss="modal">Discart</button>
                <button type="submit" className="btn btn-primary float-right">Tweet</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostTweet