export default function Card(props) {
  const {
    id,
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props;
  return (
    <div className={`card-container ${id}`}>
      <img src={imageUrl} />
      <div className="text-container">
        <img src="Path.png" />
        <span className="location">{location}</span>
        <span>
          <a className="google-maps" href={googleMapsUrl}>
            View on Google Maps
          </a>
        </span>
        <h1 className="title">{title}</h1>
        <p className="date">{startDate}</p>
        <p className="desc">{description}</p>
      </div>
    </div>
  );
}
