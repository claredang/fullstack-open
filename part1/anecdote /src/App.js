import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVoted] = useState(Array(anecdotes.length).fill(0));

  const handleClick = () => {
    return (
      setSelected(Math.floor(Math.random() * anecdotes.length))
    )
  }

  const quoteVote = () => {
    const copy = [...votes]
    copy[selected]++
    setVoted(copy)
  }

  const mostVote = () => votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <p>has {votes[selected]} votes </p>
      <Button handleClick={quoteVote} text='vote'/>
      <Button handleClick={handleClick} text='next anecdote'/>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVote()]} </p>
    </div>
  )
}

export default App