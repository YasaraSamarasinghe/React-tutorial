import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons : [
      {id: 'dre1', name: "Raji", age: 26},
      {id: 'dre2', name: "Raji", age: 26},
      {id: 'dre3', name: "Raji", age: 26}
    ],
    showPerson: false,
  }
  
  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons;
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1); //slice method used to remove one element in an array
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  render() {
    const style ={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div >
          
          {this.state.persons.map((person, index) => {
            return <Person 
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age}
                      key={person.id}
                      changed={(event) => this.nameChangedHandler(event, person.id)}
                    />
          })}
          </div> 
      );
      style.backgroundColor = 'red';
    }

    //let classes = ['red', 'bold'].join(' ');
    let assignedClasses = [];
    if(this.state.persons.length <= 2)
    {
      assignedClasses.push(classes.red); // classes =['red']
    }
    if(this.state.persons.length <= 1)
    {
      assignedClasses.push(classes.bold); // classes =['red' , 'bold']
    }

    return (
      
      <div className={classes.App}>
        <h1>hi, I'm a rect app</h1>
        <p className={assignedClasses.join(' ')}>This is working</p>
        <button 
        style={style}
        onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
      
    );
    }
}

export default App;