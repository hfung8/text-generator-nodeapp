import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    paras: 4,
    html: true,
    text: ''
  }
}

componentWillMount(){
  this.getSampleText();\
}

getSampleText(){
  axios.get('http://hispterjesus.com/api?paras='+this.state.paras+'&html='+this.state.html)
    .then((response) => {
      this.setState({text: response.data.text}), function() {
        console.log(this.state);
      }
    })
}

  render(){
  return (
    <div className="App">
      Hello
    </div>
  );
  }
}

export default App;
