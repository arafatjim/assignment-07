import React from 'react';
import SelectedPlayer from './SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({selectedPlayers,handleRemovePlayer,removePlayer}) => {
          // console.log(showSelectedPlayersInfo);
          // console.log(selectedPlayers);
          // const {name,price} = selectedPlayers;
          return (
                    <div className=' text-white  my-2 p-4 flex flex-col justify-between items-center'>
                              <p className='text-2xl font-extrabold text-[#000000]'>Selected player: {selectedPlayers.length}/6</p>
                              <div className='w-11/12 mx-auto text-xl flex justify-between items-center font-bold'>
                                        <p>Name:</p>
                                        <p>Price</p>
                              </div>
                             
                    {/* <p>Selected Player: {player.name}</p> */}
                             {
                              selectedPlayers.map((item) =>
                                        <SelectedPlayer item={item} key={item.id} removePlayer={removePlayer} handleRemovePlayer={handleRemovePlayer}></SelectedPlayer>
                              )
                             } 
                             
    
                    </div>
          );
};

export default SelectedPlayers;