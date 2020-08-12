import React, { Component } from 'react';
import axios from 'axios';
import Output from './components/Output';
import Select from'./components/Controls/Select';
import './App.css';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    paras: 4,
    text: ''
  }
}

componentWillMount(){
  this.getSampleText();
}

getSampleText(){
  axios.get('https://baconipsum.com/api/?type=all-meat&paras='+this.state.paras+'&start-with-lorem=1&format=text')
    .then((response) => {
      this.setState({text: response.data}, function(){
        console.log(this.state);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}


  render(){
  return (
    <div className="App container">
      <h1>React js Sample Text Generator</h1>
      <hr />
      <form class="form-inline">
        <div class="form-group">
          <label>Include HTML:</label>
          <Select value={this.state.html} />
        </div>
      </form>
      <Output value={this.state.text} />
    </div>
  );
  }
}

export default App;
