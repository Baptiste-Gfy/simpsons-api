import React from 'react';
import './App.css';
import BlockQuote from './components/BlockQuote';
import axios from 'axios';

const sampleQuote = {
  "quote": "Inflammable means flammable? What a country!",
  "character": "Dr. Nick",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084", "characterDirection": "Right"  
} 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quote: sampleQuote };
    this.getQuote = this.getQuote.bind(this);
  }
    

  getQuote() {
    axios.get('https://randomuser.me/api?nat=fr')
    .then(response => response.data)
    .then(data => {
      this.setState({
        quote: data,
      });
  });
}

render() {
  return (
    <div className="App">
      <BlockQuote quote={this.state.quote} />
      <button type="button" onClick={this.getQuote}>Get quote</button>
    </div>
    );    
  }
}

export default App;
