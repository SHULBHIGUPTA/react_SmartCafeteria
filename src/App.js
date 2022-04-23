import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/MenuComponent';
import { FOODMENU } from './excel/Excel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodmenu: FOODMENU,
    };
  }
  
  render() {
    return (
      <div>
        <nav className="bg-warning p-1 text-center">
              <h3>Smart Cafeteria</h3>
        </nav>
        <Menu foodmenu={this.state.foodmenu}/>
      </div>
    );
  }
}

export default App;



