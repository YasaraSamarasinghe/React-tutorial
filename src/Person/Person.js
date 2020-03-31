import React from 'react';
import './Person.css';
//import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px': {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
        {/* <div className="Person"> */}
            <p onClick={props.click}> I'm {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
};

// export default Radium(person);
export default person;