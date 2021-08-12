import React, { Component } from 'react';  // React 라는 library에서 Component라는 class를 loading함.

class TOC extends Component {
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while(i < data.length) {
      lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
      i++;
    }
    return(
      <nav>
        <ul>
          {lists}
        </ul> 
      </nav> 
    );
  }
}

export default TOC;  // 외부에서 TOC class를 사용할 수 있도록