import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text} {props.number}</button>
)

// const StatisticLine = ({text, value}) => (
//   <div>
//     {text} {value}
//   </div>
// )

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = (good -bad)/all || 0;
  const positive = (good/all)*100 || 0;
  return (
    <div>
    <h2>statistics</h2>
    {all > 0 ?(
    <table>
      <tbody>
        <tr>
          <td>good</td><td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td><td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td><td>{bad}</td>
        </tr>
        <tr>
          <td>all</td><td>{good+neutral+bad}</td>
        </tr>
        <tr>
          <td>average</td><td>{average}</td>
        </tr>
        <tr>
          <td>positive</td><td>{positive}%</td>
        </tr>
      </tbody>
    </table>
    ): (
      <p>No feedback yet</p>
    )}

  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = (newValue) => { setGood(newValue +1)}
  const setNeutralValue = (newValue) => { setNeutral(newValue +1)}
  const setBadValue = (newValue) => { setBad(newValue +1)}


  return (
    <>
      <div>
        <h2>give feedback</h2>
        <Button handleClick={() => setGoodValue(good)} text='good'/>
        <Button handleClick={() => setNeutralValue(neutral)} text='neutral'/>
        <Button handleClick={() => setBadValue(bad)} text='bad'/>
      </div>
      {good || neutral || bad ? (<Statistics good={good} neutral={neutral} bad={bad}/>): (<p>No feedback yet</p>)}
    </>
  )
}

export default App