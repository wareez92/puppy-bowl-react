import "./App.css";
import PlayerList from "./playerList";
import SearchBar from "./SearchBar";
import SinglePlayer from "./SinglePlayer";
import { useState } from "react";
import CreatePlayer from "./CreatePlayer";

function App() {
  const [playerID, setPlayerID] = useState(null);

  return (
    <>
      {playerID ? (
        <SinglePlayer playerID={playerID} setPlayerID={setPlayerID} />
      ) : (
        <>
          <CreatePlayer />
          <PlayerList setPlayerID={setPlayerID} />
        </>
      )}
    </>
  );
}

export default App;
