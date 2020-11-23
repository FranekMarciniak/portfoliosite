import { SET_NAME, SET_EMAIL, SET_MESSAGE, SET_ERROR } from "./types.js"
// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        data: {
          ...state.data,
          name: action.payload,
        },
      }
    case SET_EMAIL:
      return {
        ...state,
        data: {
          ...state.data,
          email: action.payload,
        },
      }
    case SET_MESSAGE:
      return {
        ...state,
        data: {
          ...state.data,
          message: action.payload,
        },
      }
  }
}
