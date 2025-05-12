import React from 'react';
import bannerImg from '../../assets/bg-shadow.png';
import bannerMainImg from '../../assets/banner-main.png';
const NavBanner = ({handleCoinOffer,offer}) => {
            return (
                                        <div 
                                                   className='mx-auto justify-center items-center w-11/12 py-12 px-2  md:py-2 my-8 flex gap-2 flex-col lg:h-auto relative rounded-lg bg-gray-900 sm:w-11/12 h-84 lg:w-11/12 md:w-11/12' 
                                                   style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                        >
                                                  <img src={bannerMainImg} alt="" />
                                                  <p className='text-2xl text-center font-bold text-white sm:text-xl'>Assemble Your Ultimate Dream XI Cricket Team</p>
                                                  <p className='text-gray-400 sm:text-xs md:text-xl '>Beyond Boundaries Beyond Limits</p>
                                                  <button onClick={()=>handleCoinOffer(offer)} className='bg-[#2c78f4] rounded-md border-2 hover:bg-sky-500 border-r-yellow-100 p-4  md:p-3 '>Claim Free Credit</button>
                                        </div>
            );
};

export default NavBanner;