import React from 'react';
import backgroundImage from '../../assets/bg-shadow.png';
const SubscribeBanner = () => {
          return (
                    <div className=' rounded-md pt-0 px-3 mx-auto border-2 border-[#ffffff] w-10/12 relative overflow-visible mb-[-80px]'>
                              <div className='bg-[#c1c9ff] mx-auto w-full h-50  m-4 p-4 rounded-lg flex flex-col items-center justify-center text-black'  style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                             <p className='text-xl font-bold px-2 items-center justify-center mx-auto'>Subscribe to our Newsletter</p> 
                             <p className='text-xs text-gray-500 px-2'>Get the latest updates and news right in your inbox!</p>
                             <div className='flex flex-col gap-2 px-2 mt-4 w-46 justify-center lg:flex-row'>
                                        <input className='p-1 rounded-md border-2 border-gray-500' type="email" name="email" id="" placeholder='Enter Your Email Address' />
                                        <button className='bg-[#2c78f4] border-2 border-gray-500 text-white font-bold  py-1 px-2 items-center justify-center rounded-md hover:bg-orange-600'>Subscribe</button>
                             </div>
                    </div>
                    </div>
          );
};

export default SubscribeBanner;