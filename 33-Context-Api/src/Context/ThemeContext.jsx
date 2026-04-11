import { useState } from "react"
import { createContext } from "react"

export const ThemeDataContext = createContext()
const ThemeContext = ({children}) => {
    const [Theme, setTheme] = useState('light')
  return (
    <div>
    <ThemeDataContext.Provider value={[Theme,setTheme]}>
        {children}
    </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext