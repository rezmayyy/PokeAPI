// Function to fetch Pokémon data from the API
function fetchPokemon() {
  const pokemonName = document.getElementById("pokemonName").value.toLowerCase(); // Get the input value
  const pokemonInfo = document.getElementById("pokemonInfo"); // The div where the result will be displayed

  // If the input is empty, show a message
  if (!pokemonName) {
    pokemonInfo.innerHTML = "Please enter a Pokémon name.";
    return;
  }

  // Fetch the Pokémon data from the API
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Pokémon not found');
      }
      return response.json();
    })
    .then(data => {
      // Display the Pokémon's name, ID, and sprite image
      pokemonInfo.innerHTML = `
        <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
        <p>ID: ${data.id}</p>
        <img src="${data.sprites.front_default}" alt="${data.name}">
      `;
    })
    .catch(error => {
      pokemonInfo.innerHTML = "Pokémon not found. Please try again.";
    });
}

// Event listener for the button click
document.getElementById("getPokemon").addEventListener("click", fetchPokemon);
