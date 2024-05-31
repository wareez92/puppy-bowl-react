import { useState } from "react";


export default function SearchBar({ players, setPlayers, setFilteredPlayers }) {
  const [search, setSearch] = useState("");

  const searchPup = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearch(searchValue);
    const filtered = players.filter((player) =>
      player.name.toLowerCase().includes(searchValue)
    );
    setFilteredPlayers(filtered);
  };

  return (
    <form>
      <label>Puppy Finder!</label>
      <input
        type="search"
        maxLength="24"
        placeholder="Search a pup name :-)"
        onChange={searchPup}
      />
    </form>
  );
}
