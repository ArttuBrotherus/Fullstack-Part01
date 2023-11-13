import logo from './logo.svg';
import './App.css';

//import { useState } from 'react'

/*
const Hello = ({ name, age }) => {

  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }

  return(
    <>
    <p>
      Hello {name}, you are {age} years old
    </p>
    <p>
      So you were probably born in {bornYear()}
    </p>
    </>
  )
}
*/

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = (props) => {

  const { notes } = props

  return (
    <div>
      <h1>
        Notes
      </h1>
      <ul>
        <li>
          {notes[0].content}
        </li>
      </ul>
    </div>
  )

  /*
  const name = 'Peter'
  const age = 23

  return (
    <div className="App">
      <h1>
        Greetings
      </h1>
      <Hello name="Maya" age={26+10} />
      <Hello name={name} age={age} />
    </div>
  );
  */

  // remember 'settimeout'

  /* 
  const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}
  */
}

export default App;
