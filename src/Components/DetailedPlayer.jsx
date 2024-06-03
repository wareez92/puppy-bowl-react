import React from "react";
import { fetchSinglePlayer } from "../API";
import { useNavigate } from "react-router-dom";

export default function DetailedPlayer({ player, fetchSinglePlayer }) {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      const response = await fetchSinglePlayer(player.id);
      if (response.ok) {
        // Perform any necessary actions after successful deletion
      } else {
        console.error(`Failed to delete player`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="player-card-container2">
      <div className="player-card" key={player.id}>
        <div className="picdiv">
          <img src={player.imageUrl} alt={`Image of ${player.name}`} />
        </div>
        <section>
          <h3>
            <span className="name-span">Name | </span>
            {player.name}
          </h3>
          <h4>
            <span>Team: </span>
            {player.teamId} / <span>Cohort: </span>
            {player.cohortId}
          </h4>
          <h4>
            <span>Breed: </span>
            {player.breed}
          </h4>
          <h4>
            <span>Birth: </span>
            {player.createdAt}
          </h4>
          <h4>
            <span>Status: </span>
            {player.status}
          </h4>
          <h4>
            <span>Modification: </span>
            {player.updatedAt}
          </h4>
          <div className="button-container">
            <button onClick={() => navigate("/")}>Back</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </section>
      </div>
    </div>
  );
}
