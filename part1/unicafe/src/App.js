import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Table = ( {text, value }) => {
  if (text==='positive') {
    return (
      <tr>
      <td> {text} </td>
      <td> {value} % </td>
    </tr>
    )
  }
  return (
    <tr>
      <td> {text} </td>
      <td> {value} </td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, total}) => {
    if (total === 0) {
      return (
        <div>No feedback given</div>
    )
    }
    return (
    <div>
      <table>
        <tbody>
          <Table text='good' value={good}/>
          <Table text='neutral' value={neutral}/>
          <Table text='good' value={bad}/>
          <Table text='total' value={total}/>
          <Table text='average' value={ (good-bad)/total }/>
          <Table text='positive' value={ good/total* 100}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let total = good + neutral + bad
  const increaseGood = () => setGood(good+1)
  const increaseNeutral = () => setNeutral(neutral+1)
  const increaseBad = () => setBad(bad+1)

  return (
    <div>
      <h3>give feedback</h3>

      <Button handleClick={increaseGood} text='good'/>
      <Button handleClick={increaseNeutral} text='neutral'/>
      <Button handleClick={increaseBad} text='bad'/>

      <h3>statistics</h3>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>

    </div>
  )
}

export default App