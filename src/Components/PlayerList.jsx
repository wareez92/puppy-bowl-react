import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import PlayerCard from "./PlayerCard";

export default function PlayerList() {
  //State & Setter

  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  // CreatePup States & Setters

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("bench");

  // Get & Set Players

  useEffect(() => {
    const getPlayers = async () => {
      const players = await fetchAllPlayers();
      setPlayers(players);
      setFilteredPlayers(players);
    };
    getPlayers();
  }, []);

  // Puppy Search

  const searchPup = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredPlayers = players.filter((player) =>
      player.name.toLowerCase().includes(searchValue)
    );
    setFilteredPlayers(filteredPlayers);
    console.log(filteredPlayers);
  };

  // Puppy Maker

  const postPup = async (event) => {
    const cohort = "2401_FTB_MT_WEB_PT";
    const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api";
    event.preventDefault();

    try {
      const response = await fetch(`${API_URL}/${cohort}/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          breed,
          imageUrl,
          status,
        }),
      });
      const result = await response.json();
      const createdPlayer = result.data.newPlayer;
      setPlayers((prevPlayers) => [...prevPlayers, createdPlayer]);
      setFilteredPlayers((prevFilteredPlayers) => [
        ...prevFilteredPlayers,
        createdPlayer,
      ]);
      setName(""); // Clear the input fields after creation
      setBreed("");
      setImageUrl("");
      setStatus("bench");
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(createdPlayer);
  // Return

  return (
    <>
  <h1>Puppy Bowl React</h1>
      {/* Puppy Maker */}
      <div className="puppy-options">
        <form onSubmit={postPup}>
          <label>Puppy Maker </label>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label>Breed: </label>
          <input
            type="text"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
          />

          <label>Status: </label>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="field">field</option>
            <option value="bench">bench</option>
          </select>

          <label>imageUrl: </label>
          <input
            type="url"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />

          <button type="submit">Create</button>
        </form>

        <div>
          {/* Puppy Finder */}

          <form>
            <label>Puppy Finder!</label>
            <input
              type="search"
              maxLength="24"
              placeholder="Search a pup name :-)"
              onChange={searchPup}
            />
          </form>
        </div>
      </div>
      {/* Puppy Render */}

      <div className="player-card-container">
        {filteredPlayers.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </>
  );
}
