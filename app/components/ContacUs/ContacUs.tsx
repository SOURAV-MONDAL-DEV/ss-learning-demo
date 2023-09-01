"use client"
import Image from "next/image";
import { Component } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function ContacUs() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_dmtulmb', 'template_ap2wf78', form.current, 'olyq2I1iF1OuD1Sel')
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

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
                    <input className="w-full h-12 rounded-lg px-3" type="email" name="user_email" placeholder="Enter your email address" />
                  </div>
                  <div className="relative text-white focus-within:text-white flex flex-row-reverse rounded-lg pt-5 lg:pt-0">
                    <input name="message" type="text" className="py-6 lg:py-8 text-sm md:text-lg w-full mx-3 text-black rounded-lg pl-8 focus:outline-none focus:text-black" placeholder="Enter your message" />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-6 pt-5 lg:pt-0">
                      <button type="submit" className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                        <Image src={'/assets/newsletter/send.svg'} alt="send-icon" width={30} height={30} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContacUs;

