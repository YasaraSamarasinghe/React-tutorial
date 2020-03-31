import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons : [
      {id: 'dre1', name: "Raji", age: 26},
      {id: 'dre2', name: "Raji", age: 26},
      {id: 'dre3', name: "Raji", age: 26}
    ],
    showPerson: false,
  }

  // 
  
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

    // this.setState({
    //   persons : [
    //     {name: "Raji", age: 26},
    //     {name: event.target.value, age: 26},
    //     {name: "Raji", age: 26}
    //   ]
    // })
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
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
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
              {/* <Person 
                click={this.switchNameHandler.bind(this, 'yasara')}
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}
                changed={this.nameChangedHandler}>hiiii</Person>
              <Person 
                //click={this.switchNameHandler.bind(this, 'yasara')}
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}>hiiii </Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}>hiiii </Person> */}
          </div> 
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    //let classes = ['red', 'bold'].join(' ');
    let classes = [];
    if(this.state.persons.length <= 2)
    {
      classes.push('red'); // classes =['red']
    }
    if(this.state.persons.length <= 1)
    {
      classes.push('bold'); // classes =['red' , 'bold']
    }

    return (
      // <StyleRoot>
      <div className="App">
        <h1>hi, I'm a rect app</h1>
        <p className={classes.join(' ')}>This is working</p>
        <button 
        style={style}
        //onClick={()=>this.switchNameHandler('tharu')}
        onClick={this.togglePersonHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
      // </StyleRoot>
    );
    }
}


// function App() {
//   return (
//     <div className="App">
//       <h1>hi, I'm a rect app</h1>
//       <Person name="Rajitha" age="26">hiiii</Person>
//     </div>
//   );

//   // return React.createElement('div',null, React.createElement('h1',null, 'I\'m a react app'));

// }

// export default Radium(App);
export default App;