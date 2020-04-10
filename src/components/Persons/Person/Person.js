import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor', props);
      }
    
      componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
      }
    
      componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
      }

    render () {
        console.log('[Person.js] Inside render()');
        return (
            <Aux>
                <p onClick={this.props.click}> I'm {this.props.name} and age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed}/>
            </Aux>
        )
        // return [
        //   <p onClick={this.props.click}> I'm {this.props.name} and age is {this.props.age}</p>,
        //   <p>{this.props.children}</p>,
        //   <input type="text" onChange={this.props.changed}/>
        // ]
    }
}

export default withClass(Person, classes.Person);