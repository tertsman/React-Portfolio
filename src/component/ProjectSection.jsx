import {  ArrowRight, ExternalLink, Github } from 'lucide-react';
import React, { useState } from 'react'
import { cn } from '../lib/utils';




const projects = [
  {
    id: 1,
    title: "Full-Stack POS",
    description:
      "A complete POS system with QR-based employee attendance, expense tracking, dashboard analytics, and product/customer management.",
    image: "/public/POSsystem.png", // change to your local image path or URL
    category: "Full-Stack",
    techStack: ["React", "Node.js", "Express", "MySQL", "Ant Design"],
    demoLink: "",
    githubUrl:"https://github.com/tertsman/pos-system-front"
     // add if you have
  },
  {
  id: 2,
  title: "E-Commerce Store UI",
  description:
    "A modern and responsive static UI for a basic e-commerce store homepage. Includes product listing, navigation bar, and clean layout design. No dashboard or backend functionality.",
  image: "/public/ui-eco-1.jpeg", // replace with your actual image path
  category: "Frontend",
  techStack: ["HTML", "CSS", "JavaScript"],
  demoLink: "https://boutique-dusky.vercel.app/",
  githubUrl:"https://github.com/tertsman/Boutique"
},
{
  id: 3,
  title: "Product Management UI (Static)",
  description:
    "A static front-end layout for a product management page, suitable for admin-style interfaces. Built with only HTML and CSS. No dashboard logic or interactivity.",
  image: "/public/ui-eco-2.jpeg",
  category: "Frontend",
  techStack: ["HTML", "CSS"],
  demoLink: "https://colections-alpha.vercel.app/",
  githubUrl:"https://github.com/tertsman/Colections"
},

  {
    id: 4,
    title: "MERN E-Commerce with Stripe (Ongoing)",
    description:
      "MERN stack e-commerce app with user authentication and Stripe payments, admin/customer separation.",
    image: "/public/ecommerc_mern.png",
    category: "Ongoing",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Stripe"],
    demoLink: "",
    githubUrl:"https://github.com/tertsman/Ecommerce-mern-stack"
  },
  {
    id: 5,
    title: "Admin Panel (MERN)",
    description:
      "MERN stack admin dashboard for managing e-commerce operations.",
    image: "/public/ecommerc_mern1.png",
    category: "Ongoing",
    techStack: ["React", "Node.js", "MongoDB","Materiel UI","cloudinary"],
    demoLink: "",
    githubUrl:"https://github.com/tertsman/ecommerce-dashbord-mern-stack"
  },

{
  id: 6,
  title: "E-Commerce Customer UI",
  description:
    "A responsive front-end e-commerce customer interface built with HTML, CSS, and JavaScript. Includes product listings and basic interactions. (No backend connected)",
  image: "/public/ui-store.jpeg", // update path as needed
  category: "Frontend",
  techStack: ["HTML", "CSS", "JavaScript"],
  demoLink: "https://store-customer.vercel.app/",
  githubUrl:"https://github.com/tertsman/Store-customer"
},
{
  id: 7,
  title: "E-Commerce Admin Dashboard UI",
  description:
    "An admin dashboard UI designed for managing products and orders in an e-commerce platform. Built using HTML, CSS, and JavaScript. (Static only, no backend)",
  image: "/public/ui-store-ad.jpeg", // update path as needed
  category: "Frontend",
  techStack: ["HTML", "CSS", "JavaScript"],
  demoLink: "https://store-admin-website.vercel.app/",
  githubUrl:"https://github.com/tertsman/Store-admin"
},
{
  id: 8,
  title: "Movice Streaming UI",
  description:
    "A modern and responsive movie streaming front-end interface built using HTML, CSS, and JavaScript. Features landing page with trending movies, hero section, CTA buttons, and clean layout. (No backend functionality)",
  image: "/public/Front-end.png", // update with correct image path
  category: "Frontend",
  techStack: ["HTML", "CSS", "JavaScript"],
  demoLink: "https://movice-web-frontend.vercel.app/",
  githubUrl: "https://github.com/tertsman/movice-web-frontend" // update if private or different
},
{
  id: 9,
  title: "Travel Website UI",
  description:
    "A clean and responsive travel-themed front-end landing page built with HTML, CSS, and JavaScript. Includes a hero section, destination highlights, navigation bar, and mobile-friendly layout. (No backend functionality)",
  image: "/public/travel-web.jpeg", // update with correct image path
  category: "Frontend",
  techStack: ["HTML", "CSS", "JavaScript"],
  demoLink: "https://travel-frontend-website.vercel.app/",
  githubUrl: "https://github.com/tertsman/travel-frontend-website" // update if private or different
}

  
];
const categories = ["all","Frontend","Full-Stack","Ongoing"]
const ProjectSection = () => {

  const [ActiveCategory,setActiveCategory] = useState("all");
  const filteredProjects = projects.filter((project)=> ActiveCategory === "all" || project.category === ActiveCategory)
  return (
    <section id='projects' className=' py-20 relative px-4'>
    <div className=' container mx-auto max-w-5xl '>
      <h2 className='text-3xl md:text-4xl font-semibold mb-4 text-center'>

        Feature <span className='text-sky-500'>Projects</span>
      </h2>
      <p className=' text-center text-muted-foreground mb-12 max-w-2xl mx-auto '>
            Here are some of my recent projects. Each project was carefully crafted with attention to detail,performance,and user experience
      </p>
      <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
                {categories.map((category,key)=>(
                  <button key={key} 
                  onClick={()=>setActiveCategory(category)}
                  className={cn("capitalize px-5 py-2 rounded-full transition-colors duration-300 border border-sky-500",
                    ActiveCategory === category ?  "bg-sky-500 text-white":""
                  )}
                  >
                    {category}
                     </button>
                ))}
              </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filteredProjects.map((item,key)=>(
          <div key={key} className=" group gradient-border rounded-lg overflow-hidden shadow-md card-hover " >
            <div className='h-48 overflow-hidden'>
              <img src={item.image} alt={item.title} className=' w-full h-full  transition-transform duration-500 group-hover:scale-110 '/>

            </div>

            {/* description */}
            <div className='px-3 text-center'>

              <h3 className='text-center mt-2 capitalize font-semibold'>{item.title}</h3>
              <p className='text-sm text-muted-foreground mb-2'>{item.description}</p>
            </div>
            <div className="px-2 py-1">
              <div className="flex flex-wrap gap-1">
                
                  {item.techStack.map((tag)=>(
                    <span className='px-2 py-1 text-sm font-medium rounded-full bg-purple-800/10 text-purple-600 '>{tag}</span>
                  ))}
                  <span className='px-2 py-1 text-sm font-medium rounded-full  text-sky-600 bg-sky-700/10'>{item.category}</span>
                
              </div>
            </div>

            <div className="flex flex-wrap justify-end items-center p-3 gap-3">
             
                  <a href={item.demoLink} target='_blank' className={`${item.demoLink === "" ? "hidden":"p-2 rounded-md bg-sky-500/10"}`}>
                    <ExternalLink className='text-sky-500' />
                  </a>  
                  <a href={item.githubUrl} target='_blank' className='p-2 rounded-md bg-sky-500/10'>
                    <Github className='text-sky-500'/>
                  </a>  
            </div>
          </div>
        ))}

      </div>
     <div className="mx-auto flex items-center justify-center mt-5 ">
          <a href="https://github.com/tertsman" target='_blank' className='text-muted-foreground text-sm text-sky-400 cosmic-button bg-sky-500/10  flex items-center justify-center max-w-sm gap-2 ' >View all Github <ArrowRight size={18}/></a>
     </div>
      </div>
    </section>
  )
}

export default ProjectSection
