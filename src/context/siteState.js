import {} from "./types.js"
import React, { useReducer, createContext } from "react"
import siteReducer from "./siteReducer"
export const SiteContext = createContext()
const { Provider } = SiteContext
function SiteState(props) {
  const initialState = []
  const [state, dispatch] = useReducer(siteReducer, initialState)
  return (
    <Provider
      value={{
        data: "dasd",
      }}
    >
      {props.children}
    </Provider>
  )
}

export default SiteState
