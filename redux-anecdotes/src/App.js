import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/Anecdotes.js'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteForm /> <br></br>
      <Filter />
      <AnecdoteList  />
    </div>
  )
}

export default App