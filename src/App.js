import React, { Component } from 'react';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import './App.css';
class App extends Component {  
  constructor(props){  // 초기화 담당
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'read',
      selected_content_id: 2,
      welcome:{title:'Welcome', desc:'Hello React!'},
      subject:{title:'WEB', sub:'World Wide Web!'},
      contents:[
        {id: 1, title:'HTML', desc:"HTML is HyperText Markup Language"},
        {id: 2, title:'CSS', desc:"CSS is for design"},
        {id: 3, title:'JavaScript', desc:"JavaScript is for interactive"}
      ]
    }
  }

  getReadContent(){
    var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          return data;
        }
        i++;
      }
  }

  getContent(){
    console.log('App render');
    var _title, _desc, _article = null;
    
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc; 
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } 
    else if(this.state.mode === 'read') {
      var _content= this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } 
    else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents
        this.max_content_id++;
        /* this.state.contents.push(
          {id: this.max_content_id, title: _title, desc: _desc}
        ); 
        push는 기존의 contents까지 변화를 주므로 concat 메소드 사용
        */
        var _contents = this.state.contents.concat(
          {id: this.max_content_id, title: _title, desc: _desc}
        )
        this.setState({
          contents: _contents
        });
        console.log(_title, _desc);
      }.bind(this)}></CreateContent>
    } 
    else if(this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_title, _desc){
        // add content to this.state.contents
        this.max_content_id++;
        /* this.state.contents.push(
          {id: this.max_content_id, title: _title, desc: _desc}
        ); 
        push는 기존의 contents까지 변화를 주므로 concat 메소드 사용
        */
        var _contents = this.state.contents.concat(
          {id: this.max_content_id, title: _title, desc: _desc}
        )
        this.setState({
          contents: _contents
        });
        console.log(_title, _desc);
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render() {  // props or state의 값이 변경되면 해당되는 component의 render 함수가 호출된다. 즉 화면이 다시 그려짐
    return (
      <div className="App"> 
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode: 'welcome'});
          }.bind(this)}
        >
         </Subject>

        <TOC onChangePage={function(id){
          this.setState({
            mode: 'read',
            selected_content_id: Number(id)
          });
        }.bind(this)} 
        data={this.state.contents}>
        </TOC>

        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          })
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;