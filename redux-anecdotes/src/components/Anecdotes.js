import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'


const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  const voteClick = (id) => {
    dispatch(vote(id)) 
  }

  return (
    <>
     {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}  
            <button onClick={() => voteClick(anecdote.id)}> vote</button>
          </div>
        </div>
      )}
    </>
  )
}
export default AnecdoteList