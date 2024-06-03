// Variable Section

const cohort = "2401_FTB_MT_WEB_PT";
const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api";

// Get All Players Section

const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${API_URL}/${cohort}/players`);
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    console.error("Uh oh! trouble fetching players", error);
  }
};

// Get a Single Player Section

const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${API_URL}/${cohort}/players/${playerId}`);
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.error("Uh oh! trouble fetching player", error);
  }
};

// Create a Player Section

// Delete a Player Section

const deletePlayer = async (playerId) => {
  try {
    const response = await fetch(`${API_URL}/${cohort}/players/${playerId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error(error);
      return { ok: false };
    }

    const result = await response.json();
    console.log(result);
    return { ok: true };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
};

// Export Section

export { fetchAllPlayers, fetchSinglePlayer, deletePlayer };
