import React from 'react';

const Footer = () => {
          return (
                    <div>
                              <footer className='footer flex gap-4 justify-around lg:flex-row footer-horizontal bg-[#000] text-base-content p-10'>
 
                                        <nav className='flex flex-col'>
                                                  <h6 className='text-xl font-bold text-[#e94141]'>Services</h6>
                                                  <a class="link link-hover">Branding</a>
                                                  <a class="link link-hover">Design</a>
                                                  <a class="link link-hover">Marketing</a>
                                                  <a class="link link-hover">Advertisement</a>
                                        </nav>
                                        <nav className='flex flex-col'>
                                                  <h6 className='text-xl font-bold text-[#e94141]'>Company</h6>
                                                  <a class="link link-hover">About us</a>
                                                  <a class="link link-hover">Contact</a>
                                                  <a class="link link-hover">Jobs</a>
                                                  <a class="link link-hover">Press kit</a>
                                        </nav>
                                        <nav className='flex flex-col'>
                                                  <h6 className='text-xl font-bold text-[#e94141]'>Legal</h6>
                                                  <a class="link link-hover">Terms of use</a>
                                                  <a class="link link-hover">Privacy policy</a>
                                                  <a class="link link-hover">Cookie policy</a>
                                        </nav>
                              </footer>
                    </div>
          );
};

export default Footer;