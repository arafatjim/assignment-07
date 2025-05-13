import React from 'react';
import removeBtn from '../../../assets/removed.png'
const SelectedPlayer = ({item,handleRemovePlayer,removePlayer}) => {
          const {name,battingStyle,image} = item;
          // console.log(removePlayer);
          return (
                    
                    <div className='w-11/12 mx-auto text-black text-[1rem]'>
                              
                               <div  className='border-2 border-gray-500 rounded-lg my-4 p-2 flex justify-between items-center'>
                                                  <div className='flex gap-2 items-center'>
                                                            <img className='w-12 h-12 rounded-lg' src={image} alt="" />
                                                            <div >
                                                                      <h4 className='font-bold'>{name}</h4>
                                                                      <p className='text-[#383838]'>{battingStyle}</p>
                                                            </div>
                                                            {/* <p className='flex gap-1 items-center'>: {price} <img className='w-4 h-4' src={coinImg} alt="" /></p> */}
                                                  </div>
                                                  
                                                  <button onClick={() => removePlayer && handleRemovePlayer(removePlayer.id)} className='p-3 bg-none'>
                                                            <img className='w-5 h-5' src={removeBtn} alt="" />
                                                  </button>
                                                  
                                        </div>
                                        
                    </div>
          );
};

export default SelectedPlayer;