import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import NavBanner from './Component/NavBanner/NavBanner'
import AvailablePlayers from './Component/AvailablePlayer/AvailablePlayers'
import UtilitiesBtn from './Component/Utilities/UtilitiesBtn'
import SelectedPlayers from './Component/SelectedPlayers/SelectedPlayers'
import SelectedPlayer from './Component/SelectedPlayers/SelectedPlayer/SelectedPlayer'
  import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [offer, setOffer] = useState(0);
  const handleCoinOffer = () =>{
    const newOffer =  100000;
      setOffer(newOffer);
      // alert(`You have received ${newOffer} coins!`);
  }


  const [showPlayers, setShowPlayers] = useState(false);

  const togglePlayers = () => {
    if (offer === 0) {
      toast('Please claim your free credit first');
      setShowPlayers(false);
      return;
    }
    // Ensure the offer is used only once
    setShowSelectedPlayersInfo(false);
    setOffer(prevOffer => prevOffer); // Keep the offer unchanged
    setShowPlayers(true);
    
    
      
  };

  //selected players
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const handleSelectedPlayers = (player) => {
    const newSelectedPlayers = [...selectedPlayers, player];
    if (newSelectedPlayers.length >= 7) {
      toast('You can only select up to 6 players');
      

      return;
    }
    if (selectedPlayers.find(selected => selected.id === player.id)) {
      // alert('This player is already selected');
      return;
    }
    const remCoins = 100000 - player.price;
      setOffer(remCoins);
      setSelectedPlayers(newSelectedPlayers);
    setSelectedPlayers(newSelectedPlayers);
  };

    
const [showSelectedPlayersInfo, setShowSelectedPlayersInfo] = useState(false);
  const showSelectedPlayersNames = () => {
    setShowSelectedPlayersInfo(!showSelectedPlayersInfo);
    if (selectedPlayers.length === 0) {
      toast('No players selected');
      setShowPlayers(true);
      setShowSelectedPlayersInfo(false);
      return;
    }
    setShowSelectedPlayersInfo(true);
    setShowPlayers(false);
  };

  return (
    <div className="">
      <Navbar offer={offer}></Navbar>
      <NavBanner offer={offer} handleCoinOffer={handleCoinOffer}></NavBanner>
      <UtilitiesBtn selectedPlayers={selectedPlayers} handleSelectedPlayers={handleSelectedPlayers} showPlayers={showPlayers} togglePlayers={togglePlayers} showSelectedPlayersNames={showSelectedPlayersNames} showSelectedPlayersInfo={showSelectedPlayersInfo}> </UtilitiesBtn>
      
      <ToastContainer />
    </div>
    
    
  )
}

export default App
