import React from 'react';

const Comments = React.createClass({

  renderComment(comment, i) {
    return (
      <div className="comment" key={i} i={i}>
        <p>
        <strong>{comment.user}</strong>
         {comment.text}
         <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
    console.log(comment);
  },

  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author =  this.refs.author.value;
    const comment =  this.refs.comment.value;
    // dispatch add comment event
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },

  render(){
    return (
    <div class="comments">
      {this.props.postComments.map(this.renderComment)}
      <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
        <input type="text" ref="author" placeholder="author"/>
        <input type="text" ref="comment" placeholder="comment"/>
        <input type="submit" hidden/>
      </form>
    </div>
    )
  }
});

export default Comments;
