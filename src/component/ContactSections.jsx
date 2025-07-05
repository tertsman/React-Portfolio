import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Send,
} from "lucide-react";
import React, {  useState } from "react";
import { cn } from "../lib/utils";

import emailjs from '@emailjs/browser';
import { message } from "antd";


const ContactSections = () => {
 const [formData,setFormData] = useState({
  name:"",
  email:"",
  message:""
 })

  const SERVICE_ID = "service_70135wa";
  const TEMPLATE_ID = "template_isv0x5s";
  const PUBLIC_KEY = "CBSEWyjxogTPhtKCw"

  const handleSubmit= (e)=>{
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID , TEMPLATE_ID,e.target, PUBLIC_KEY).then((result) => {
      console.log(result.text)
      message.success("Message send!")
      setFormData({name:'',email:'',message:''})
    }).catch(()=>message.error("Oops! Something want wrong!,Please try again."))

  }
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In<span className="text-sky-500"> Touch</span>
        </h2>
        <p className=" text-center text-muted-foreground mb-10 max-w-2xl mx-auto ">
          I'm always open to discussing new opportunities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-6 ">
              Contact Information
            </h2>
            <div className="space-y-6 justify-center ">
              <div className="flex items-start space-x-4 ">
                <div className="p-3 rounded-full bg-sky-500/10 ">
                  <Mail className=" h-6 w-6 text-sky-500 " />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:tertsman@gmail.com"
                    className=" text-muted-foreground hover:text-sky-500 transition-colors "
                  >
                    tertsman@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 ">
                <div className="p-3 rounded-full bg-sky-500/10 ">
                  <PhoneCall className=" h-6 w-6 text-sky-500 " />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+855974260963"
                    className=" text-muted-foreground hover:text-sky-500 transition-colors "
                  >
                    +855 974260963/+855 89704832
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 ">
                <div className="p-3 rounded-full bg-sky-500/10 ">
                  <MapPin className=" h-6 w-6 text-sky-500 " />
                </div>
                <div>
                  <h4 className="font-medium">Address</h4>
                  <a
                    href="mailto:tertsman@gmail.com"
                    className=" text-muted-foreground hover:text-sky-500 transition-colors "
                  >
                    Tboung Khmum province,Tboung Khmum
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">Contact With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/feed/?trk=nav_logo"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://t.me/GTAtert" target="_blank">
                  <Send />
                </a>
                <a
                  href="https://www.facebook.com/share/19TXJMs2Qo/"
                  target="_blank"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          <div className=" gradient-border rounded-lg shadow-sm p-6">
            <h3 className=" text-2xl font-semibold mb-6  ">Send a Message</h3>
            <form onSubmit={handleSubmit} >
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  required
                  onChange={(e)=>setFormData({...formData,name:e.target.value})}
                  placeholder="Tert sman"
                  className=" w-full px-4 py-3 rounded-lg mt-3 mb-2 border border-input bg-transparent focus:outline-hidden focus:ring-1 focus:ring-sky-300 "
                />
              </div>
              <div>
                <label htmlFor="email">Your email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e)=>setFormData({...formData,email:e.target.value})}
                  placeholder="tertsman@gmail.com"
                  className=" w-full px-4 py-3 mb-2 rounded-lg mt-3 border border-input bg-transparent focus:outline-hidden focus:ring-1 focus:ring-sky-300 "
                />
              </div>
              <div>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e)=>setFormData({...formData,message:e.target.value})}
                  placeholder="Hello, I'd like to tack about.."
                  className=" w-full px-4 py-3 rounded-lg mt-3 border border-input bg-transparent focus:outline-hidden focus:ring-1 focus:ring-sky-300 resize-none "
                />
              </div>
              <button type="submit" className={cn("cosmic-button w-full items-center justify-center gap-2 mt-4 text-center flex")}> send message <Send size={16}/></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSections;
