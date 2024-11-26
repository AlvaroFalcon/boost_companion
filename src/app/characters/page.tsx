"use server";

import getCharacters from "../../actions/get-characters";

const CharactersPage = () => {
  const characters = getCharacters();
  return (
    <div
      className={"flex justify-center items-center bg-gray-500 h-screen w-full"}
    >
      {characters.map((character) => (
        <div key={character.characterName}>{character.characterName}</div>
      ))}
    </div>
  );
};
export default CharactersPage;
