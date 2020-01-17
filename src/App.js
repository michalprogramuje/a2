import React, { Component } from 'react';
import './App.css';
import UserInput from './userInput/userInput';
import Validation from './Validation/Validation';


class App extends Component {
  state = {
    fields:[
    {id: '1', text : ''}
  ]
  };

  textChangedHandler = (event , id) => {
    const textIndex = this.state.fields.findIndex(p => {
      return p.id ===id;
    });

    const text = {...this.state.fields[textIndex]};

    text.text = event.target.value;

    const fields = [...this.state.fields];
    fields[textIndex] = text;

    this.setState ( {fields:fields})
  };

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      font: 'inherit',
      curson: 'pointer'
    };

    let inputs = null;
    let validations = null;

    inputs = (
    <div>
    {this.state.fields.map( (field) => {
      return <UserInput
        text = {field.text}
        key = {field.id}
        changed = {(event) => this.textChangedHandler(event, field.id)} />
    })}
    </div>
  );
    validations = (
      <div>
      {this.state.fields.map( (field) => {
        return <Validation
        text = {field.text}/>
      })}</div>
    )

    return (
      <div className="App">
        <h1>No witam witam</h1>
        {inputs}
        {validations}
      </div>
    );
  }
}

export default App;
