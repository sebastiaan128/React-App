import React, { useState } from 'react';

const Footer = () => {

    return (

        <footer className="bg-[#2F3542] ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                  <div className="mb-6 md:mb-0">
                      <a href="/" className="flex items-center">
                          <img src="./IMG/logo-nav.png" className="h-8 me-3" alt="Logo" />
                          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ">QuantumSky Solutions</span>
                      </a>
                  </div>
                  <div className="grid grid-cols-2 gap-8 sm:gap-6 ">
                      <div className='md:justify-self-end text-center md:text-start'>
                          <h2 className="mb-6 text-sm font-semibold uppercase  md:mr-20 text-white">Navigations</h2>
                          <ul className="t  font-medium text-white">
                              <li className="mb-2">
                                  <a href="https://flowbite.com/" className="hover:underline">Home</a>
                              </li>
                              <li className="mb-2">
                                  <a href="https://flowbite.com/" className="hover:underline">About</a>
                              </li>
                              <li className="mb-2">
                                  <a href="https://flowbite.com/" className="hover:underline">Services</a>
                              </li>
                              <li className="mb-2">
                                  <a href="https://flowbite.com/" className="hover:underline">Pricing</a>
                              </li>
                              <li className="mb-2">
                                  <a href="https://flowbite.com/" className="hover:underline">Contact</a>
                              </li>
                              
                          </ul>
                      </div>
                      
                      <div>
                          <h2 className="mb-6 text-sm font-semibold text-white uppercase text-center">About us</h2>
                          <ul className="text-gray-500">
                              <li className="mb-4 text-white">
                                  <p href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laboriosam ratione beatae temporibus voluptatem quam doloremque sint! Exercitationem non at nulla neque consectetur, ullam, magnam cumque molestiae impedit excepturi aspernatur!</p>
                              </li>
                              
                          </ul>
                      </div>
                  </div>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
              <div className="sm:flex sm:items-center sm:justify-between text-center">
                  <span className="text-sm text-white sm:text-center ">© 2024 <a  className="hover:underline">Michel</a>. All Rights Reserved.
                  </span>
                  
              </div>
            </div>
        </footer>
        

    );
};

export default Footer;
