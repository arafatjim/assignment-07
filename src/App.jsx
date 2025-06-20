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
import SubscribeBanner from './Component/SubscribBanner/SubscribBanner'
import Footer from './Component/Footer/Footer'
function App() {
  const [offer, setOffer] = useState(0);
  const handleCoinOffer = () =>{
    const newOffer =200000;
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
      showPlayers(false);
      setShowSelectedPlayersInfo(false);
      return;
    }
    if (selectedPlayers.find(selected => selected.id === player.id)) {
      // alert('This player is already selected');
      return;
    }
    const remCoins = offer - player.price;
    // if(remCoins < 0){
    //   toast('You have not enough coin')
    // }
      setOffer(remCoins);
      setSelectedPlayers(newSelectedPlayers);
    // setSelectedPlayers(newSelectedPlayers);
  };

    
const [showSelectedPlayersInfo, setShowSelectedPlayersInfo] = useState(false);
  const showSelectedPlayersNames = () => {
    setShowSelectedPlayersInfo(!showSelectedPlayersInfo);
    if (selectedPlayers.length === 0) {
      toast('No players selected');
      setShowPlayers(false);
      setShowSelectedPlayersInfo(false);
      return;
    }
    setShowSelectedPlayersInfo(true);
    setShowPlayers(false);
  };



//remove a player
const [removePlayer, setRmovePlayer]=useState([]);

  const handleRemove = (playerId) => {
    const remainingPlayer = selectedPlayers.filter(player => player.id !== playerId);
    setSelectedPlayers(remainingPlayer);
    const removedPlayer = selectedPlayers.find(player => player.id === playerId);
    if (removedPlayer && removedPlayer.price) {
      setOffer(prevOffer => prevOffer + removedPlayer.price);
    }
    setRmovePlayer(remainingPlayer);
  };



  return (
    <div className='bg-[#fbfdff]'>
      <Navbar offer={offer}></Navbar>
      <NavBanner offer={offer} handleCoinOffer={handleCoinOffer}></NavBanner>
      <UtilitiesBtn selectedPlayers={selectedPlayers} handleSelectedPlayers={handleSelectedPlayers} showPlayers={showPlayers} togglePlayers={togglePlayers} showSelectedPlayersNames={showSelectedPlayersNames} showSelectedPlayersInfo={showSelectedPlayersInfo} removePlayer={removePlayer} handleRemove={handleRemove}> </UtilitiesBtn>
      <SubscribeBanner></SubscribeBanner>
      <Footer></Footer>
      <ToastContainer />
    </div>   
  )
}

export default App
