import React, { Component } from 'react';  // react 라는 library에서 Component라는 class를 loading함.

class TOC extends Component {
  render() {
    return(
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul> 
      </nav> 
    );
  }
}

export default TOC;  // 외부에서 TOC class를 사용할 수 있도록