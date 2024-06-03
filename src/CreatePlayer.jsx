import { useEffect, useState } from "react";
import PlayerList from "./Components/playerList";

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api";
const cohort = "2401_FTB_MT_WEB_PT";

export default function CreatePlayer() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("bench");
  const [imageUrl, setImageUrl] = useState("");
  const [teamId, setTeamId] = useState("");
  const [cohortId, setCohortId] = useState(cohort);
  const [createdPlayers, setCreatedPlayers] = useState({});

  const postPlayer = async (event) => {
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
          status,
          imageUrl,
          teamId,
          cohortId,
        }),
      });
      const result = await response.json();
      setCreatedPlayers(result.data.newPlayer);
      console.log(createdPlayers);
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div>
      <form onSubmit={postPlayer}>
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
        <label>teamId: </label>
        <input
          type="number"
          value={teamId}
          onChange={(event) => setTeamId(event.target.value)}
        />
        <label>cohortId: </label>
        <input
          type="text"
          value={cohortId}
          onChange={(event) => setCohortId(event.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
