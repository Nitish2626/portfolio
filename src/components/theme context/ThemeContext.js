import { createContext, useContext, useState } from "react";

const ThemeContext=createContext();

export const ThemeProvider=(props)=>{

    const [darkMode,setDarkMode]=useState(false);

    const changeMode=()=>{
        setDarkMode((prev)=>!prev);
    };

    return(
        <ThemeContext.Provider value={{darkMode,changeMode}}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export const useTheme=()=>useContext(ThemeContext);