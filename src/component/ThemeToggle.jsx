import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

const ThemeToggle = () => {
    const [isDarkMod,setIsDarkMod] = useState(false)


    useEffect(()=>{
      const storedTheme = localStorage.getItem("theme")
      if(storedTheme === 'dark'){
        document.documentElement.classList.add("dark")
        setIsDarkMod(true)
      }else{
        localStorage.setItem("theme","light")
          setIsDarkMod(false)
      }

    },[])
    const isToggle =()=>{
        if(isDarkMod){
            document.documentElement.classList.remove("dark")
            setIsDarkMod(false)
            localStorage.setItem("theme","light")
        }else{
             document.documentElement.classList.add("dark")
            setIsDarkMod(true)
            localStorage.setItem("theme","dark")
        }
    }
  return (
    <>
      <button onClick={isToggle} className={cn("fixed right-20 top-3  md:top-5 md:right-5 z-100 p-2 rounded-full transition duration-300 ",
        "focus:outline-hidden"
      )}>
        {isDarkMod ? (<Sun className='h-6 w-6 text-yellow-300' />):(<Moon className='h-6 w-6 text-blue-900'/>)}
      </button>
    </>
  )
}

export default ThemeToggle
