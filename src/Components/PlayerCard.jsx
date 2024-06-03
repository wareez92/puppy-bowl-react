import { deletePlayer } from "../API";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlayerCard({ player }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();

  const deletePup = async () => {
    try {
      const response = await deletePlayer(player.id);
      if (response.ok) {
        setIsDeleted(true);
      } else {
        console.error(`Failed to delete player: ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Error deleting player: ${error}`);
    }
  };

  if (isDeleted) {
    return null;
  }

  return (
    <div className="player-card">
      <div className="picdiv">
        <img src={player.imageUrl} alt={`Image of ${player.name}`} />
      </div>
      <section>
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
        <div className="button-container">
          <button onClick={() => navigate(`/players/${player.id}`)}>
            Details
          </button>
          <button onClick={deletePup}>Delete</button>
        </div>
      </section>
    </div>
  );
}
