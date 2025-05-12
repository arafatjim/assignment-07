import React from 'react';
import AvailablePlayers from '../AvailablePlayer/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const UtilitiesBtn = ({showPlayers,togglePlayers,handleSelectedPlayers,showSelectedPlayersInfo,selectedPlayers,showSelectedPlayersNames}) => {
      return (
                  <div>
                              <div className='w-11/12 py-4 mx-auto px-2 flex flex-col justify-between items-center font-bold md:flex-row'>
                                    <p className='text-3xl font-extrabold text-black'>Available Players</p>
                                    <div className='flex gap-2'>
                                          <button onClick={() => togglePlayers(showPlayers)} className='bg-[#2c78f4] rounded-md p-2'>
                                                  Available
                                          </button>
                                          <button className='bg-[#2c78f4] rounded-md p-2'>
                                                  <span onClick={() => showSelectedPlayersNames(showSelectedPlayersInfo)}>Selected</span> <span className='text-black'>({selectedPlayers.length})</span>  
                                          </button>
                                          
                                    </div>
                              </div>
                              
                              {showPlayers && <AvailablePlayers handleSelectedPlayers={handleSelectedPlayers} togglePlayers={togglePlayers} showSelectedPlayersNames={selectedPlayers} />}
                              {showSelectedPlayersInfo && <SelectedPlayers showSelectedPlayersInfo={showSelectedPlayersInfo} selectedPlayers={selectedPlayers} />}
                              
                              
                  </div>
      );
};

export default UtilitiesBtn;