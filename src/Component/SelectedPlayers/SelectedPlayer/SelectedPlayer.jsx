import React from 'react';
import coinImg from '../../../assets/dollar.png';
const SelectedPlayer = ({item}) => {
          const {name, price,country} = item;
          console.log(item);
          return (
                    
                    <div className='w-11/12 mx-auto text-white text-[1rem]'>
                              
                               <div  className=' bg-[#102b57] rounded-lg my-2 p-4 flex justify-between items-center'>
                                                  <div className='flex gap-1 items-center'>
                                                            <h4>{name},</h4>
                                                            <p>Country: {country}</p>
                                                  </div>
                                                  <p className='flex gap-1 items-center'>: {price} <img className='w-4 h-4' src={coinImg} alt="" /></p>
                                        </div>
                                        
                    </div>
          );
};

export default SelectedPlayer;