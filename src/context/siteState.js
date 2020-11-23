import { SET_EMAIL, SET_ERROR, SET_MESSAGE, SET_NAME } from "./types.js"
import React, { useReducer, createContext } from "react"
import siteReducer from "./siteReducer"
export const SiteContext = createContext()
const { Provider } = SiteContext
function SiteState(props) {
  const initialState = {
    data: {
      name: "",
      email: "",
      message: "",
    },
    error: {},
  }
  const [state, dispatch] = useReducer(siteReducer, initialState)
  const setName = text => {
    dispatch({
      type: SET_NAME,
      payload: text,
    })
  }
  const setEmail = text => {
    dispatch({
      type: SET_EMAIL,
      payload: text,
    })
  }
  const setMessage = text => {
    dispatch({
      type: SET_MESSAGE,
      payload: text,
    })
  }

  return (
    <Provider
      value={{
        setName,
        setEmail,
        setMessage,
        currentState: state,
      }}
    >
      {props.children}
    </Provider>
  )
}

export default SiteState
