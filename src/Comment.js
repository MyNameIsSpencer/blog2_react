import React, {Component} from 'react';

class Comment extends Component {
  render () {
    return (
      <div>
        <p> {this.props.commentBody}</p>
      </div>
    )
  }
}

export default Comment
