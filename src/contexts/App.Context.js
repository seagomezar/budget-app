import { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

export default function Provider(props) {

  const [state, setState] = useState({
    isOpenMovementForm: false,
    movements: []
  })

  useEffect(() => {
    const localStorageState = localStorage.getItem("state");
    const localStorageStateParsed = JSON.parse(localStorageState);
    if (localStorageState) {
      setState({...state, movements: localStorageStateParsed.movements})
    }
  }, [state])

  return <AppContext.Provider value={{state, setState}}>
    {props.children}
  </AppContext.Provider>
}