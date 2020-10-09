import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/Anecdotes.js'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm />
      <AnecdoteList  />
    </div>
  )
}

export default App