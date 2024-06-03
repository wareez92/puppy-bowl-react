import "./App.css";
import PlayerList from "./Components/PlayerList";
import { Routes, Route } from "react-router-dom";
import SinglePlayer from "./Components/SinglePlayer";
import DetailedPlayer from "./Components/DetailedPlayer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PlayerList />} />
        <Route path="/players" element={<PlayerList />} />
        <Route path="/players/:playerId" element={<SinglePlayer />} />
        <Route path="/players/:playerId" element={<DetailedPlayer />} />
      </Routes>
    </>
  );
}

export default App;
