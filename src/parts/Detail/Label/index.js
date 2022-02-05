import "./index.scss";

export default function Label({ title, value }) {
  return (
    <div className="label">
      <span className="label__title">{title}</span>
      <span className="label__value">{value}</span>
    </div>
  );
}
