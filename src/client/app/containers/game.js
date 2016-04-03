import React from 'react';
import { Component } from 'react';
import { getPhotos } from '../actions/index';
import { connect } from 'react-redux';



class Game extends Component {
  // componentWillMount(){
  //   this.props.getPhotos()
  // }

  renderPosts(){
  return this.props.posts.map((post)=> {
    return (
      <li className="list-group-item" key={post.id}>
        <span className='pull-xs-right'> {post.categories}</span>
        <strong>{post.title}</strong>
      </li>
    );
  });
}

  render() {
    return (
      <div>
        <h1> Let's Play </h1>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { getPhotos }) (Game);
