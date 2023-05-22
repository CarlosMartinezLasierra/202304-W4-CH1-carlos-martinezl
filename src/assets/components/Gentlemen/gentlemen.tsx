//import { typeGentlemen } from "../../mocks/MOCK_GENTLEMEN";

export function Gentlemen({ ...props }) {
  return (
    <main className="main">
      <ul className="gentlemen">
        <li className="gentleman">
          <div className="gentleman__avatar-container">
            <img
              className="gentleman__avatar"
              src={props.picture}
              alt="The Fary pointing at you"
            />
            <span className="gentleman__initial">{props.initial}</span>
          </div>
          <div className="gentleman__data-container">
            <h2 className="gentleman__name">{props.name}</h2>
            <ul className="gentleman__data-list">
              <li className="gentleman__data">
                <span className="gentleman__data-label">Profession:</span>
                {props.profession}
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">Status:</span>{" "}
                {props.status}
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">Twitter:</span>{" "}
                {props.twitter}
              </li>
            </ul>
          </div>
          <i className="icon gentleman__icon fas fa-check"></i>
          <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
        </li>
      </ul>
    </main>
  );
}
