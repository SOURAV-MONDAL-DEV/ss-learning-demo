"use client"
import Image from "next/image";
import { Component, useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from "next/link";


function ContactUs() {
  const form = useRef<HTMLFormElement | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);


  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const MForm = e.target;

    if (form.current) {
      emailjs.sendForm('service_dmtulmb', 'template_ap2wf78', form.current, 'olyq2I1iF1OuD1Sel')
        .then((result) => {
          // console.log(result.text);
          setIsFormSubmitted(true);
          if (form.current) {
            form.current.reset(); // Reset the form
          }
          
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };




  interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
  }

  const socialLinks: socialLinks[] = [
    {
      imgSrc: '/assets/footer/facebook.svg',
      link: 'https://www.facebook.com/souravmondal.sourav.7311/',
      width: 10
    },
    {
      imgSrc: '/assets/footer/youtube.svg',
      link: 'https://www.facebook.com/souravmondal.sourav.7311/',
      width: 14
    },
    {
      imgSrc: '/assets/footer/twitter.svg',
      link: 'https://www.facebook.com/souravmondal.sourav.7311/',
      width: 14
    },

  ]



  return (
    <>
      <div id="contacUs" className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
          <div className="col-span-12 bg-imagee">
            <div className="mb-10 mt-24 lg:mx-64 lg:my-24">
              <h3 className="text-4xl md:text-5xl text-center font-semibold text-white mb-3"> Contact us.</h3>
              <h3 className="text-base font-normal opacity-75 text-white text-center mb-8">
                Let us know what you are thinking about us. <br /> Drop your message/email and send it to us from below.
              </h3>

              <div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-10 mx-3 flex flex-col md:flex-row justify-around gap-10">
                    <input className="w-full h-12 rounded-lg px-3" type="text" name="user_name" placeholder="Enter your NAME" />
                    <input className="w-full h-12 rounded-lg px-3" type="email" name="user_email" placeholder="Enter your email address" required />
                  </div>
                  <div className="relative text-white focus-within:text-white flex flex-row-reverse rounded-lg pt-5 lg:pt-0">
                    <input name="message" type="text" className="py-6 lg:py-8 text-sm md:text-lg w-full mx-3 text-black rounded-lg pl-8 focus:outline-none focus:text-black" placeholder="Enter your message" required/>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-6 pt-5 lg:pt-0">
                      <button type="submit" className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                        <Image src={'/assets/newsletter/send.svg'} alt="send-icon" width={30} height={30} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {isFormSubmitted && <p  className="text-center -mb-5 text-white">Your message has been sent!</p>}
            </div>
          </div>
        </div>
      </div>

      {/* More contact option */}

      <div className="text-center mt-10">
        <h2 className=" text-bold text-3xl">  More Contact Options</h2>
        <div className=" mt-5 md:flex items-center justify-center gap-5 text-xl">
          <div className="flex items-center justify-center gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="lightgreen" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <p>+88 01745274403 , +88 01736798889</p>
          </div>
          <div className="border-l border-black h-12 hidden md:block"></div>
          <div className="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <p> souravmondalcode@gmail.com</p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <h2 className="mx-2">Find Us On: </h2>
          <div className='flex gap-4 mx-2'>
          {socialLinks.map((items, i) => (
            <Link href={items.link} key={i}>
              <div className="bg-white h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-ultramarine">
                <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
              </div>
            </Link>
          ))}
        </div>
        </div>

      </div>
    </>
  );
}

export default ContactUs;




