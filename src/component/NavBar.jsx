import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import { Menu, X } from 'lucide-react'



const navItem =[
    {
        name:"Home",
        href:"#hero"
    },
    {
        name:"About",
        href:"#about"
    },
    {
        name:"Skills",
        href:"#skills"
    },
    {
        name:"Projects",
        href:"#projects"
    },
    {
        name:"Contact",
        href:"#contact"
    },
]
const NavBar = () => {

    const [isScrolled,setIsScrolled] = useState(false)
    const [isOpenMenu,setIsOpenMenu] = useState(false)

    useEffect(()=>{
        const handleScroll= ()=>{
            setIsScrolled(window.screenY > 10)
        }
        window.addEventListener("scroll",handleScroll)
        return ()=>window.removeEventListener('scroll',handleScroll)
    },[])
  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-slate-900 backdrop-blur-md shadow-xs":"py-5"
    )}>
      
      <div className="container flex justify-between items-center">
       <a href='#hero'>
        <span className='relative z-10'>
            <span className='text-glow text-2xl font-bold'>Port<span className='text-sky-500'>folio</span></span>
        </span>
       </a>

       {/* desktop nav */}
        <div className='hidden md:flex space-x-5'>
            {navItem.map((item,key)=>(
                <a key={key} href={item.href} className=' hover:text-sky-400 transition-colors duration-300 '>
                    {item.name}
                </a>
            ))}
        </div>

       {/* mobile nav */}
        <button className='md:hidden p-2 z-50' onClick={()=>setIsOpenMenu((pre)=>!pre)}>
            {isOpenMenu ? <X size={24}/>:<Menu size={24}/>}
        </button>
       <div className={cn("fixed w-screen-1/3 right-0 top-0 bottom-0 bg-slate-900  px-20 py-18 h-screen backdrop-blur-md z-40 flex flex-col items-center justify-start","transition-all duration-300 md:hidden"
        ,isOpenMenu ? "opacity-100 pointer-events-auto ":"opacity-0 pointer-events-none"
       )}>
        <div className='flex flex-col space-y-5  bg-slate-900 '>
            {navItem.map((item,key)=>(
                <a onClick={()=>setIsOpenMenu(false)} key={key} href={item.href} className=' hover:text-sky-400  transition-colors duration-300 '>
                    {item.name}
                </a>
            ))}
        </div>
       </div>
      </div>
    </nav>
  )
}

export default NavBar
