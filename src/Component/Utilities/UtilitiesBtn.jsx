import React from 'react';
import AvailablePlayers from '../AvailablePlayer/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const UtilitiesBtn = ({showPlayers,togglePlayers,handleSelectedPlayers,showSelectedPlayersInfo,selectedPlayers,showSelectedPlayersNames,handleRemove,removePlayer}) => {
      return (
                  <div>
                              <div className='w-full py-4 mx-auto px-2 flex flex-col justify-between items-center font-bold   md:flex-row '>
                                    {/* <p className='text-3xl font-extrabold text-black pb-2 justify-center'>Choose your team </p> */}
                                    <div className='flex gap-2 md:fixed right-0 top-36'>
                                          <button onClick={() => togglePlayers(showPlayers)} className='bg-[#2c78f4] border-2 border-yellow-50 p-2 rounded-md  hover:bg-orange-600'>
                                                  Available
                                          </button>
                                          <button className='bg-[#2c78f4] border-2 border-yellow-50 p-2 rounded-md hover:bg-orange-600'>
                                                  <span onClick={() => showSelectedPlayersNames(showSelectedPlayersInfo)}>Selected</span> <span className='text-black'>({selectedPlayers.length})</span>  
                                          </button>
                                          
                                    </div>
                              </div>
                              
                              {showPlayers && <AvailablePlayers handleSelectedPlayers={handleSelectedPlayers} togglePlayers={togglePlayers} showSelectedPlayersNames={selectedPlayers} />}
                              
                              {showSelectedPlayersInfo && <SelectedPlayers  showSelectedPlayersInfo={showSelectedPlayersInfo} selectedPlayers={selectedPlayers} removePlayer={removePlayer} handleRemove={handleRemove} />}
                              
                              
                  </div>
      );
};

export default UtilitiesBtn;