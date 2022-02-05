import "./index.scss";

export default function Stats({ data }) {
  return (
    <>
      <div className="text-stats">
        <h5>Pokemon stats</h5>
      </div>
      <div className="pokemon__stats">
        {data.stats?.map((item, index) => (
          <div className={`pokemon__stats--name ${item.stat.name}`} key={index}>
            <span>{item.stat.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}
