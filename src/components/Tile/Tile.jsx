import "./Tile.css";

export const Tile = ({ className, src }) => {
  return (
    <div className={`Tile ${className}`}>{src && <img src={src} alt="" />}</div>
  );
};
