import "./App.css";
import PlayerList from "./playerList";
import SinglePlayer from "./SinglePlayer";
import { useState } from "react";

function App() {
  const [playerID, setPlayerID] = useState(null);

  return (
    <>
      {playerID ? (
        <SinglePlayer playerID={playerID} setPlayerID={setPlayerID} />
      ) : (
        <PlayerList setPlayerID={setPlayerID} />
      )}
    </>
  );
}

export default App;


