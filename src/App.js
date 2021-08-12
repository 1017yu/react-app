import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';
class App extends Component {  
  constructor(props){  // 초기화 담당
    super(props);
    this.state = {
      mode:'welcome',
      welcome:{title:'Welcome', desc:'Hello React!'},
      subject:{title:'WEB', sub:'World Wide Web!'},
      contents:[
        {id: 0, title:'HTML', desc:"HTML is HyperText Markup Language"},
        {id: 1, title:'CSS', desc:"CSS is for design"},
        {id: 2, title:'JavaScript', desc:"JavaScript is for interactive"}
      ]
    }
  }
  render() {  // props or state의 값이 변경되면 해당되는 component의 render 함수가 호출된다. 즉 화면이 다시 그려짐
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App"> 
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>x
        </Subject> 
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;