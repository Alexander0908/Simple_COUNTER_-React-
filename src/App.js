import { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  nextCount = () => {
    this.setState(state => ({ 
      count: state.count + 1
    }))
  }
  prevCount = () => {
    this.setState(state => ({ 
      count: state.count - 1
    }))
  }
  
  rndCount = () => {
    this.setState({
      count: +(Math.random() * (50 - -50) + -50).toFixed(0)
    })
  }

  resetCount = () => {
    this.setState({
      count: this.state.count = 0
    })
  }

  
  render() {
    const {count} = this.state;
    
    return (
      <div class="app">
        <div class="counter">{count}</div>
        <div class="controls">
          <button onClick={this.nextCount}>INC</button>
          <button onClick={this.prevCount}>DEC</button>
          <button onClick={this.rndCount}>RND</button>
          <button onClick={this.resetCount}>RESET</button>
        </div>
      </div>
    )
  }
}

//ReactDOM.render(<App counter={0}/>, document.getElementById('app'));

export default App;