import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const Button = ({ clickFunc, text }) => {
  return(
    <button onClick={clickFunc}>
      {text}
    </button>
  )
}

/*
const Statistics = (props) => {
  // ...
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // do not define a component within another component
  const Statistics = (props) => {
    // ...
  }

  return (
    // ...
  )
}
*/

const StatisticLine = (props) => {

  const pct = props.text == "positive" ?
  "%"
  : ""

  return(
    <div>
      <p>
        {props.text} {props.value} {pct}
      </p>
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const all = good+neutral+bad

  return(
    all > 0 ?
      <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={(good - neutral) / all} />
      <StatisticLine text="positive" value={good / all * 100} />
      </div>
    :
      <div>No feedback given</div>
  )

}

/*
<StatisticLine text="good" value ={...} />
      <StatisticLine text="neutral" value ={...} />
      <StatisticLine text="bad" value ={...} />
      
good 0

neutral 1

bad 0

all 1

average -1

positive 0 %
*/

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const oneGood = () => {
    setGood(good + 1)
  }

  const oneNeutral = () => {
    setNeutral(neutral + 1)
  }

  const oneBad = () => {
    setBad(bad + 1)
  }

  //  (if ehto a b)

  return (
    <div>
      <h1>
        give feedback
      </h1>
      <Button clickFunc={oneGood} text={'good'} />
      <Button clickFunc={oneNeutral} text={'neutral'} />
      <Button clickFunc={oneBad} text={'bad'} />

      <h1>
        statistics
      </h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App;
