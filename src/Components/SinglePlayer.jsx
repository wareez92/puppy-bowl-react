import { useState } from "react";
import { useEffect } from "react";
import App from "../App";
import PlayerCard from "./PlayerCard";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../API";
import DetailedPlayer from "./DetailedPlayer";

export default function SinglePlayer() {

// States & Setters

  const [player, setPlayer] = useState();
  const [isLoading, setIsLoading] = useState(true);

// Get & Set Player
  const { playerId } = useParams();

  useEffect(() => {
    const getPlayerByID = async () => {
      const player = await fetchSinglePlayer(playerId);
      setPlayer(player);
      setIsLoading(false);
    };
    getPlayerByID();
  }, []);

// Return

  return isLoading ? (
    <h3 className="loading">Loading...</h3>
  ) : player ? (
    <DetailedPlayer key={player.id} player={player} />
  ) : (
    <h3>Player not found</h3>
  );

}
