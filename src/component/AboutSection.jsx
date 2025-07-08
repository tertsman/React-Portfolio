import { Briefcase, Code, Globe, GraduationCap, User } from "lucide-react";
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
              I’m a second-year student and a dedicated web developer with 1+
              year of experience building responsive and high-performance web
              applications using modern technologies.
            </p>
            <p className="text-muted-foreground">
              I enjoy solving real-world problems through clean and efficient
              code, and I’m always exploring new tools and best practices to
              stay ahead in the fast-evolving web landscape.
            </p>
            <div className="flex flex-col md:flex-row gap-4 pt4 justify-center ">
              <a href="#contact" className="cosmic-button ">
                Get In Touch
              </a>
              {/* <a
                href="https://drive.google.com/drive/u/0/folders/1InyUZublPjMykbO8vMf1g0gX-s9x3Hkj"
                target="_blank"
                className=" px-6 py-2 rounded-full border border-sky-400 hover:bg-sky-500/10 transition-all duration-300 hover:scale-105 "
              >
                Download CV
              </a> */}

              <a
                href="https://drive.google.com/uc?export=download&id=1a0WtvM57tLhh0BclDqwICQbsvE8LjxDB"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-sky-400 hover:bg-sky-500/10 transition-all duration-300 hover:scale-105"
                download
              >
                Download CV
              </a>
            </div>
          </div>
          <div className=" about grid grid-cols-1 gap-6 max-h-[500px] overflow-y-auto pr-2 ">
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
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-sky-500/10">
                  <GraduationCap className="h-6 w-6 text-sky-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-slate-400">
                    Second-year student majoring in Computer Science Technology
                    at University of Heng Samrin Thbong Khmum (2023–2027).
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-sky-500/10">
                  <Globe className="h-6 w-6 text-sky-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Languages</h4>
                  <p className="text-slate-400">
                    Khmer (Native), English (Intermediate - Reading & Writing)
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
