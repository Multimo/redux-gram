// reducers take in two things and return what the state would look like
// takes: 1. action & 2. current state
// returns new state after the action4
function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
    // return new state with new comment
      return [...state,
        {
          text: action.comment,
          user: action.author
      }]
    case 'REMOVE_COMMENT':
      return [
        //all state  before index
        ...state.slice(0, action.index),
        //all state after index
        ...state.slice(action.index + 1)
      ]
      
    default:
      return state;
  }
}



function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      //take existing state
      ...state,
      // redurcer compisition, call other reduce to deal small state slice
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
