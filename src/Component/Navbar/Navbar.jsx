import React from 'react';
import navlogo from '../../assets/logo.png';
import coinImg from '../../assets//dollar.png';

const Navbar = ({offer}) => {
          return (
                    <div className='bg-gray-800'>
                              <div className='flex w-full justify-around flex-col  mx-auto items-center text-white p-4  lg:flex-row gap-x-96'>
                              
                                        <img src={navlogo} alt="" />
                              
                              <div role="tablist" className='sm:gap-2 grid grid-cols-3 items-center justify-around md:flex gap-4 lg:gap-8 xl:gap-12 2xl:gap-16'>
                                        <button role="tab" className='bg-[#2c78f4] border-2 border-yellow-50 p-2 rounded-md hover:bg-orange-600'>Home</button>
                                        <button role="tab" className='bg-[#2c78f4] border-2 border-yellow-50 p-2 rounded-md hover:bg-orange-600'>Fixture</button>
                                        <button role="tab" className='bg-[#2c78f4] border-2 border-yellow-50 p-2 rounded-md hover:bg-orange-600'>Teams</button>
                                        <button role="tab" className='bg-[#2c78f4] border-2 border-yellow-50 p-2 rounded-md hover:bg-orange-600 sm:mx-auto'> Schedules</button>
                                        <div className='w-44 bg-[#2c78f4] flex border-1 border-slate-500 rounded-lg  justify-center items-center gap-2' >
                                                  <p className='items-center w-auto font-extrabold text-white'>{offer}</p>
                                                  <span className='text-black font-semibold'> Coin</span>
                                                  <img className='w-10 h-10 p-2' src={coinImg} alt="" />
                                        </div>
                              </div>
                              
                              </div>
                    </div>
                    
                    
          );
};

export default Navbar;