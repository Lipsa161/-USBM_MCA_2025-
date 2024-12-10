import {createContext,useState} from 'react';
const ThemeContext = createContext();

export ThemeProvider=({children})=>{
    const[theme,setTheme]=useState("light");

    const toggleTheme=()=>{
        setTheme{(prev)=>(prev === "light"? "dark": "light")};

    }
}