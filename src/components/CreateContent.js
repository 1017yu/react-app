import React, { Component } from 'react';  // react 라는 library에서 Component라는 class를 loading함.

class CreateContent extends Component {
  render() {
    return(
      <article>
        <h2>Create</h2>

        <form action="/create_process" method="post"
          onSubmit={function(e){
            e.preventDefault(); 
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="title"></input>
          </p>
          <p>
            <textarea name="desc" placeholder="description"></textarea> {/* textarea: 입력해야하는 글자가 여러줄일 때 */}
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;