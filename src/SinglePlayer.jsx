import { useState } from "react";
import { useEffect } from "react";
import App from "./App";

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api";
const cohort = "2401_FTB_MT_WEB_PT";

export default function SinglePlayer({ playerID, setPlayerID }) {
  const [player, setPlayer] = useState({});

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(
          `${API_URL}/${cohort}/players/${playerID}`
        );
        const result = await response.json();
        setPlayer(result.data.player);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPlayer();
  }, []);
  console.log(player);

  return (
    <div className="player-card" key={player.id}>
      <img src={player.imageUrl} alt={`Image of ${player.name}`}/>
      <h3>
        <span className="name-span">Name | </span>
        {player.name}
      </h3>
      <h4> <span>team: </span>{player.teamId} / <span>cohort: </span>{player.cohortId}</h4>
      <h4>
        <span>Birth: </span>
        {player.createdAt}
      </h4>
      <h4>
        <span>Modification: </span>
        {player.updatedAt}
      </h4>
      <button onClick={() => setPlayerID(null)}
      >
        Back
      </button>
      <button>Delete</button>
    </div>
  );
}
