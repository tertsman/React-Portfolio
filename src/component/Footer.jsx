import {  ArrowUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div >
        <div className='container  border-t-1 border-sky-500/10'>

      <div className='px-10 py-6 w-full flex justify-between items-center border-t-sky-100'>
       <h2 className='text-xl font-medium text-muted-foreground '>&copy;Tert Codding, All Right Reserved </h2> 
       <a href='#hero' className=' flex flex-col items-center animate-bounce p-3 gradient-border rounded-full '>
        

        <ArrowUp className='h-5 w-5 text text-sky-400'/>
        <span className=' text-sm text-slat-300 '>scroll</span>
        
      </a> 
      </div>
        </div>
    </div>
  )
}

export default Footer
