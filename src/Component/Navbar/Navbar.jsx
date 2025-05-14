import React from 'react';
import navlogo from '../../assets/logo.png';
import coinImg from '../../assets//dollar.png';
import './NavBar.css'
const Navbar = ({offer}) => {
          return (
                    <div className='nav-bar'>
                              <div className='flex w-full justify-around flex-col  mx-auto items-center text-white p-4  lg:flex-row gap-x-96'>
                              
                                        <div className='flex gap-2 items-center'>
                                                  <img src={navlogo} alt="" />
                                                  <p className='text-3xl font-extrabold text-[#8b9aff]'><a href="#">Dream <span className='text-[#ff2424]'> XI</span></a></p>
                                        </div>
                              
                              <div role="tablist" className='sm:gap-2 grid justify-between grid-cols-3 items-center md:flex gap-4 lg:gap-8 xl:gap-12 2xl:gap-16'>
                                        <button role="tab" className='bg-[#2c78f4] border-2 border-yellow-50 p-2 rounded-md hover:bg-orange-600'>Home</button>
                                        <button role="tab" className='bg-[#2c78f4] border-2 border-yellow-50 p-2 rounded-md hover:bg-orange-600'>Fixture</button>
                                        <button role="tab" className='bg-[#2c78f4] border-2 border-yellow-50 p-2 rounded-md hover:bg-orange-600'>Teams</button>
                                        <button role="tab" className='bg-[#2c78f4] border-2 border-yellow-50 p-2 rounded-md hover:bg-orange-600 sm:mx-auto'> Schedules</button>
                                        <div className='w-44 bg-[#05a538] flex border-2 p-[.4rem] border-[#fff] rounded-lg  justify-center items-center gap-1' >
                                                  <p className='items-center text-xl px-1 w-auto font-extrabold text-white'>{offer}</p>
                                                  <span className='text-[#6e460f] font-semibold'> Coin</span>
                                                  <img className='w-8 h-8 p-2' src={coinImg} alt="" />
                                        </div>
                              </div>
                              
                              </div>
                    </div>
                    
                    
          );
};

export default Navbar;