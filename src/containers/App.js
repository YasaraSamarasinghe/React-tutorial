import React, { PureComponent } from 'react';
import classes from './App.css';
//import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor', props);
    this.state = {
      persons : [
        {id: 'dre1', name: "Raji", age: 26},
        {id: 'dre2', name: "Raji", age: 26},
        {id: 'dre3', name: "Raji", age: 26}
      ],
      showPerson: false,
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   //return true;
  //   return nextState.persons !== this.state.persons ||
  //           nextState.showPerson !== this.state.showPerson;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentDidUpdate', nextProps, nextState);
  }

  // state = {
  //   persons : [
  //     {id: 'dre1', name: "Raji", age: 26},
  //     {id: 'dre2', name: "Raji", age: 26},
  //     {id: 'dre3', name: "Raji", age: 26}
  //   ],
  //   showPerson: false,
  // }
  
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
    
    console.log('[App.js] inside render()');

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div >
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
          </div> 
      );
      // style.backgroundColor = 'red';
    }

    //let classes = ['red', 'bold'].join(' ');
    

    return (
      
      <div className={classes.App}>
        <button onClick={() => {this.setState({showPerson: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
      
    );
    }
}

export default App;