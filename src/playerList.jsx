import { useState } from "react";
import { useEffect } from "react";


const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api";
const cohort = "2401_FTB_MT_WEB_PT";

export default function PlayerList({playerID, setPlayerID}) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(`${API_URL}/${cohort}/players`);
        const result = await response.json();
        setPlayers(result.data.players);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPlayers();
  }, []);

  console.log(players);

  return (
    <div className="player-card-container">
      {players.map((player) => (
        <div className="player-card" key={player.id}>
          <img src={player.imageUrl} />
          <h3>
            <span className="name-span">Name | </span>
            {player.name}
          </h3>
          <h4>
            <span>Breed: </span>
            {player.breed}
          </h4>
          <h4>
            <span>Status: </span>
            {player.status}
          </h4>
          <button onClick={() => {setPlayerID(player.id)}}>Details</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}
