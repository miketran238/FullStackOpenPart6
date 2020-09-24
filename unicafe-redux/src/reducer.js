const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const newGood = state.good + 1
      return {good: newGood, ok: state.ok, bad: state.bad}
    case 'OK':
      const newOk = state.ok + 1
      return {good: state.good, ok: newOk, bad: state.bad}
    case 'BAD':
      const newBad = state.bad + 1
      return {good: state.good, ok: state.ok, bad: newBad}
    case 'ZERO':
      return {good:0, ok: 0, bad:0}
    default: return state
  }
  
}

export default counterReducer