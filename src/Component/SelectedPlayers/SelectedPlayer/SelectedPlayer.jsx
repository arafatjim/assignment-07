import React from 'react';

const SelectedPlayer = ({item}) => {
          const {name, price} = item;
          console.log(item);
          return (
                    
                    <div className='w-11/12 mx-auto text-black'>
                              
                               <div  className=' bg-[#216ce5] rounded-lg my-2 p-4 flex justify-between items-center'>
                                                  <h4>{name}</h4>
                                                  <p>: {price}M</p>
                                        </div>
                                        
                    </div>
          );
};

export default SelectedPlayer;