import React from 'react';
import './App.css';
import Form from './Components/Forms'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      mathSign: '',
      mathSol: ''
    }
  };
  



  render(){
    return (
      <div className="App">
        <Form />
      </div>
    );

  }
}

export default App;
