import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className=" relative min-h-screen flex flex-col items-center justify-center px-4 "
    >
      <div className=" container max-w-4xl mx-auto text-center z-10  flex items-center justify-center flex-col">
        <div className="profile flex items-center justify-center border-3 border-dashed  border-sky-300 shadow rounded-full w-60 mb-3 h-60 mb-3 overflow-hidden">
          <div>
            <img
              src="/public/profile.jpeg"
              alt=""
              className="w-55 h-55 object-cover rounded-full"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-0">
            <span className=" opacity-0 animate-fade-in  ">Hi, I'm </span>
            {/* <span className=' text-sky-500 opacity-0 animate-fade-in-delay-1'>Tert</span>
                <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2 '> Sman</span> */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500 opacity-0 animate-fade-in-delay-1">
              Tert Sman
            </span>
          </h1>
          <p className=" text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 ">
            I create stellar web experiences using modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>
          <div className=" pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#"
              className=" cosmic-button bg-sky-500  text-sm font-semibold "
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
        <span className=" text-sm text-slat-300">scroll</span>
        <ArrowDown className="h-5 w-5 text text-sky-400" />
      </div>
    </section>
  );
};

export default HeroSection;
