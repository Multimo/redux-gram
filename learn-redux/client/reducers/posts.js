// reducers take in two things and return what the state would look like
// takes: 1. action & 2. current state
// returns new state after the action4

function posts(state = [], action) {

  console.log(action)
  switch (action.type) {
    case 'INCREMENT_LIKES':
      console.log("incrementing likes");
      const i = action.index;
      return [
        ...state.slice(0,i), // Before we are updating
        {...state[i], likes: state[i].likes + 1}, // increment like
        ...state.slice(i + 1), // After we are updating
      ]
    default:
    return state;
  }
}

export default posts;
