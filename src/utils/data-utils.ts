export const fetchCharacters = async () => {
  const response = await fetch("https://raw.githubusercontent.com/maj-rf/StellaSoraData/refs/heads/main/character.json");
  return await response.json();
};

export const fetchPotentials = async () => {
  const response = await fetch("https://raw.githubusercontent.com/maj-rf/StellaSoraData/refs/heads/main/potential.json");
  return await response.json();
};
