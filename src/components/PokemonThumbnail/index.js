import "./index.scss";

export default function PokemonThumbnail({
  className,
  types,
  source,
  altImage,
  pokemon,
  onClick,
}) {
  return (
    <div
      className={["thumbnail__wrapper", className].join(" ")}
      onClick={onClick}
    >
      <figure className="thumbnail__wrapper--image">
        <img src={source} alt={altImage} className="img-contain" />
      </figure>
      <div className="thumbnail__wrapper--detail">
        <h3>{pokemon}</h3>
        <small>Type: {types}</small>
      </div>
    </div>
  );
}
