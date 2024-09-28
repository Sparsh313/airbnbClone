/* eslint-disable jsx-a11y/img-redundant-alt */
export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }
  return (
    <div className="card">
      {badgeText && <div className="badge">{badgeText}</div>}
      <img src={props.coverImg} alt="Image of katie" className="card-img" />
      <div className="status">
        <img src="../img/star.png" alt="star-icon" className="star" />
        <span>{props.stats.rating}</span>
        <span className="grey">({props.stats.reviewCount})</span>
        <span className="grey">{props.location}</span>
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>
          <span className="bold">From {props.price}$</span>/ person
        </p>
      </div>
    </div>
  );
}
