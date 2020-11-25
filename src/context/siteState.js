import {} from "./types.js"
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

  return <Provider value={{}}>{props.children}</Provider>
}

export default SiteState
