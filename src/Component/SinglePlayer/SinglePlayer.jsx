import React, { use } from 'react';
import userImg from '../../assets/user.png';
import flagImg from '../../assets/flag.png';

const SinglePlayer = ({player,handleSelectedPlayers}) => {
          const {id,country,name,title, image, price,battingStyle,bowlingStyle,} = player;
          // console.log(player.name);
          return (
                    <div className='mx-auto justify-center items-center'>
                              <div className=' bg-base-100 h-[370px] border-2 border-gray-600 bg-[#3a498b] rounded-md shadow-sm m-auto items-center sm:w-96 lg:w-72 md:w-72'>
                                        <figure className='w-full h-30 overflow-hidden bg-cover p-1'>
                                                  <img
                                                  src={image}
                                                  alt={name}
                                                  className='h-40 w-96 m-auto rounded-md' />
                                        </figure>
                                        <div className='flex gap-2 justify-start text-center items-center font-bold py-1'>
                                                  <img className='w-8 h-8' src={userImg} alt="" />   
                                                  <h3>{name}</h3>    
                                        </div>
                                        <div>
                                                  <div className='country-info flex justify-between items-center px-1 py-2'>
                                                           <div className="flag flex items-center gap-2 font-semibold">
                                                            <img className='w-4 h-4' src={flagImg} alt="" />
                                                             <h4 className=''>{country}</h4>
                                                           </div>
                                                            <button className='text-sm p-1 rounded-md'>{title}</button>
                                                  </div>
                                        </div>
                                        <hr className='w-[96%] mx-auto' />
                                        <h4 className='px-1 font-semibold'>Rating</h4>
                                        <div className='flex justify-between gap-1 items-center px-1 py-1 text-sm'>
                                                  <h4 className='p-1 rounded-md'>{battingStyle}</h4>
                                                  <h4 className=' p-1 rounded-md'>{bowlingStyle}</h4>
                                        </div>
                                        <div className="flex justify-between items-center prince-info font-semibold p-1">
                                                  <p>Price: {price} M</p>
                                                  <button onClick={()=>handleSelectedPlayers(player)} className='text-sm text-gray-700 border-2 border-gray-900 bg-yellow-500 p-1 rounded-md'>Choose Player</button>
                                        </div>
                              </div>
                    </div>
          );
};

export default SinglePlayer;