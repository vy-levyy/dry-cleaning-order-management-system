import * as actionTypes from '../actions/actionTypes'

const initialState = {
  usersList: [],
  isLoading: true,
  error: false,
}

const fetchUsersStart = state => {
  return {
    ...state,
    isLoading: true,
  }
}

const fetchUsersSuccess = (_, action) => {
  return {
    usersList: action.usersList,
    isLoading: false,
    error: false,
  }
}

const fetchUserDelete = state => {
  return {
    ...state,
    isLoading: false,
    error: false,
  }
}

const fetchUsersFail = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.error,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_START:
      return fetchUsersStart(state, action)
    case actionTypes.FETCH_USERS_SUCCESS:
      return fetchUsersSuccess(state, action)
    case actionTypes.FETCH_USER_DELETE:
      return fetchUserDelete(state, action)
    case actionTypes.FETCH_USERS_FAIL:
      return fetchUsersFail(state, action)
    default:
      return state
  }
}

export default reducer
