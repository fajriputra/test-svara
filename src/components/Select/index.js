import propTypes from "prop-types";

import "./index.scss";

export default function Select({ value, onChange, options, defaultOption }) {
  return (
    <select className="form-select" value={value} onChange={onChange}>
      <option value="">{defaultOption}</option>
      {options.map((item, index) => (
        <option {...item} key={index} />
      ))}
    </select>
  );
}

Select.propTypes = {
  onChange: propTypes.func,
  options: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    })
  ),
};
