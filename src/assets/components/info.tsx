import { MOCK_GENTLEMEN } from "../../mocks/mock_gentlemens";
import { Gentlemen } from "./gentlemen";

export function Info() {
  return (
    <>
      {MOCK_GENTLEMEN.map((characters) => (
        <Gentlemen
          key={characters.id}
          picture={characters.picture}
          name={characters.name}
          profession={characters.profession}
          status={characters.status}
          twitter={characters.twitter}
          selected={false}
          alternativeText={characters.alternativeText}
          initial={characters.name.charAt(0)}
        ></Gentlemen>
      ))}
    </>
  );
}
