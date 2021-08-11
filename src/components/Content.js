import React, { Component } from 'react';  // react 라는 library에서 Component라는 class를 loading함.

class Content extends Component {
  render() {
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

export default Content;