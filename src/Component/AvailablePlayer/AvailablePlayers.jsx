import React, { use, useEffect } from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';
import SelectedPlayer from '../SelectedPlayers/SelectedPlayer/SelectedPlayer';
// import playerJson from '../../../public/players.json';
const AvailablePlayers = ({handleSelectedPlayers,showSelectedPlayersInfo,showSelectedPlayersNames,handleRemove,removePlayer}) => {
          const [players, setPlayers] = React.useState([]);
          useEffect(() => {
                      fetch('/players.json')
                              .then(response => response.json())
                              .then(data => setPlayers(data))
                              .catch(error => console.error('Error fetching players:', error));
          },[]);
          
          return (
                    <div>
                              
                              
                                <p className='text-black text-2xl font-bold pl-16 py-3 flex items-center justify-center'>Available Players</p>
                                <div className='w-[96%] mx-auto grid gap-4 justify-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1'>
                                        {
                                        players.map((player,index) => <SinglePlayer handleSelectedPlayers={handleSelectedPlayers} player={player} key={index}></SinglePlayer> ||<SelectedPlayers player={player} handleSelectedPlayers={handleSelectedPlayers} key={index} removePlayer={removePlayer} handleRemove={handleRemove}></SelectedPlayers> || <SelectedPlayer showSelectedPlayersNames={showSelectedPlayersNames} showSelectedPlayersInfo={showSelectedPlayersInfo} removePlayer={removePlayer} handleRemove={handleRemove}></SelectedPlayer> 
                                        ) 
                                        }
                              </div>
                    </div>
          );
};

export default AvailablePlayers;