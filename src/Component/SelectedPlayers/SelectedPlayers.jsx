import React from 'react';
import SelectedPlayer from './SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({showSelectedPlayersInfo,selectedPlayers}) => {
          console.log(showSelectedPlayersInfo);
          // console.log(selectedPlayers);
          // const {name,price} = selectedPlayers;
          return (
                    <div className='bg-[#051e45] text-white  my-2 p-4 flex flex-col justify-between items-center'>
                              <div className='w-11/12 mx-auto text-3xl flex justify-between items-center font-bold'>
                                        <p>Name:</p>
                                        <p>Price</p>
                              </div>
                             
                    {/* <p>Selected Player: {player.name}</p> */}
                             {
                              selectedPlayers.map((item) =>
                                        <SelectedPlayer item={item} key={item.id}></SelectedPlayer>
                              )
                             } 
                             
    
                    </div>
          );
};

export default SelectedPlayers;