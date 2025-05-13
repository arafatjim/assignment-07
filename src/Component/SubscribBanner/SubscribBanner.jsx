import React from 'react';

const SubscribeBanner = () => {
          return (
                    <div className='sm:w-[98%] p-1 md:w-9/12  my-4 rounded-md py-2 px-6 mx-auto border-2 border-[#d12f2f] '>
                              <div className='bg-[#173059] mx-auto  w-full h-50   m-4 p-4 rounded-lg flex flex-col items-center justify-center text-white'>
                             <p className='text-xl font-bold px-4 items-center justify-center'>Subscribe to our Newsletter</p> 
                             <p className='text-xs text-gray-500'>Get the latest updates and news right in your inbox!</p>
                             <div className='flex gap-2 mt-4 w-[98%] justify-center'>
                                        <input className='p-2 rounded-md border-[#173059]' type="email" name="email" id="" placeholder='Enter Your Email Address' />
                                        <button className='bg-[#2c78f4] border-2  border-yellow-50 p-2 rounded-md hover:bg-orange-600'>Subscribe</button>
                             </div>
                    </div>
                    </div>
          );
};

export default SubscribeBanner;