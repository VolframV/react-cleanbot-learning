import React, { Component } from 'react';
import Accounts from './components/Accounts';
import bootstrap from './bootstrap.css'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      accounts: []

    }
  }


  getAccounts() {
    this.setState({
      accounts: [
        {
          id: 0,
          parent: null,
          name: 'Account 0'
        },
        {
          id: 1,
          parent: 0,
          name: 'Account 1'
        },
        {
          id: 2,
          parent: 0,
          name: 'Account 2'
        },
        {
          id: 3,
          parent: 0,
          name: 'Account 3'
        },
        {
          id: 4,
          parent: 1,
          name: 'Account 4'
        },
        {
          id: 5,
          parent: 1,
          name: 'Account 5'
        },
        {
          id: 6,
          parent: 1,
          name: 'Account 6'
        },
        {
          id: 7,
          parent: 2,
          name: 'Account 7'
        },
        {
          id: 8,
          parent: 3,
          name: 'Account 8'
        },
        {
          id: 9,
          parent: 4,
          name: 'Account 9'
        },
      ]
    })
  }



  componentWillMount() {
    this.getAccounts();
  }


  render() {
    return (
      <div className="App">

        <Accounts accounts={this.state.accounts} />

      </div>
    );
  }
}

export default App;
