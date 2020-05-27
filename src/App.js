import React, {Component} from "react";
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mariokart'}
    ]
  }
  render() {
    return (
    <div className="App container">
      <h1 className="center blue-text">
        Todos
      </h1>
      <Todos todos={this.state.todos}/>
    </div>
    );
  }
}

export default App;
