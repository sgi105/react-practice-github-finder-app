import { createContext, useReducer } from 'react'
import AlertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const initialState = null

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  const setAlert = (msg, type) => {
    dispatch({
      payload: {
        type,
        msg,
      },
      type: 'SET_ALERT',
    })

    setTimeout(() => {
      dispatch({
        type: 'REMOVE_ALERT',
        payload: null,
      })
    }, 3000)
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext
