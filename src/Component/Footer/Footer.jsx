import React from 'react';
import footerImg from '../../assets/logo-footer.png';
const Footer = () => {
          return (
                    <div className='mx-auto'>
                              <footer className='footer flex flex-col bg-[#11263f] justify-center'>
                                        <img className='mx-auto pt-32 my-3 w-30 h-30' src={footerImg} alt="" />
                                        <div className='w-11/12 mx-auto flex flex-col gap-4 justify-around  lg:flex-row '>
                                        <nav className='flex flex-col'>
                                                  <h6 className='text-xl font-bold text-[#e94141]'>About Us</h6>
                                                  <p className='sm:w-11/12 lg:w-44'>We are a passionate team dedicated to providing the best services to our customers.</p>
                                        </nav>
                                        <nav className='flex flex-col'>
                                                  <h6 className='text-xl font-bold text-[#e94141]'>Quick Lick</h6>
                                                  <li ><a href="#">About us</a></li>
                                                  <li ><a href="#">Contact</a></li>
                                                  <li ><a href="#">Jobs</a></li>
                                                  <li ><a href="#">Press kit</a></li>
                                        </nav>
                                        <nav className='flex flex-col'>
                                                  <h6 className='text-xl font-bold text-[#e94141]'>Legal</h6>
                                                  <p className='sm:w-11/12 lg:w-44'>Subscribe to our newsletter for the latest updates.</p>
                                                  <div className='flex gap-2 py-2 w-44'>
                                                            <input className='w-40 p-1 rounded-md' type="email" placeholder='Email Address' name="email" id="" />
                                                            <button className='bg-[#2c78f4] border-2 border-yellow-50 p-2 rounded-md hover:bg-orange-600 '>Subscribe</button>
                                                  </div>
                                        </nav>
                                        </div>
                              </footer>
                    </div>
          );
};

export default Footer;