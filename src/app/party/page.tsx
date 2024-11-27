"use server";

import getParties from "../../actions/get-parties";

const PartyPage = () => {
  const parties = getParties();
  return (
    <div
      className={"flex justify-center items-center bg-gray-500 h-screen w-full"}
    >
      {parties.map((party) => (
        <div key={party.id}>{party.partyName}</div>
      ))}
    </div>
  );
};
export default PartyPage;
