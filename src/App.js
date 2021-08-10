import React, {Component} from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import './App.css';

class App extends Component {

  

  render() {
    return (
      <div className="App">
        {/* <Header title={this.state.title}/> */}
        <Header title="Mon site"/>
        <Categories>
         
        </Categories>
      </div>
    )
  }
}

export default App;
