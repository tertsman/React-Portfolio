import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-sky-500"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className=" text-2xl font-semibold ">
              Passionate Web developer{" "}
            </h3>

            <p className="text-muted-foreground">
              With over 12 months of experience in web development, I specialize
              in creating responsive, accessible, and high-performance web
              applications using modern technologies.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about crafting elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>
            <p className="text-muted-foreground">
              I specialize in building responsive, accessible, and
              high-performance web apps. Passionate about solving complex
              problems and constantly learning new technologies to stay ahead in
              the modern web ecosystem.
            </p>

            <div className="flex flex-col md:flex-row gap-4 pt4 justify-center ">
              <a href="#contact" className="cosmic-button ">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/drive/u/0/folders/1InyUZublPjMykbO8vMf1g0gX-s9x3Hkj"
                target="_blank"
                className=" px-6 py-2 rounded-full border border-sky-400 hover:bg-sky-500/10 transition-all duration-300 hover:scale-105 "
              >
                Download CV
              </a>
            </div>
          </div>
          <div className=" grid grid-cols-1 gap-6 ">
            <div className=" gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-sky-500/10 ">
                  <Code className="h-6 w-6 text-sky-500" />
                </div>
                <div className="text-left">
                  <h4 className=" font-semibold text-lg ">Web Development</h4>
                  <p className=" text-slate-400 ">
                    Creating responsive website and web applications with modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className=" gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-sky-500/10 ">
                  <User className="h-6 w-6 text-sky-500" />
                </div>
                <div className="text-left">
                  <h4 className=" font-semibold text-lg ">UX/UI Design</h4>
                  <p className=" text-slate-400 ">
                    Designing intuitive user interface and seamless user
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className=" gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-sky-500/10 ">
                  <Briefcase className="h-6 w-6 text-sky-500" />
                </div>
                <div className="text-left">
                  <h4 className=" font-semibold text-lg ">
                    Project Management
                  </h4>
                  <p className=" text-slate-400 ">
                    Leading project from conception to completing with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
