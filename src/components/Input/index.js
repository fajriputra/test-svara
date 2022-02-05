import "./index.scss";

export default function Input({ type, placeholder, onKeyPress }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="form-control"
      onKeyPress={onKeyPress}
    />
  );
}

Input.defaultProps = {
  type: "text",
};
