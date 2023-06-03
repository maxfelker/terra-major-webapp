import PropTypes from 'prop-types';

RangeInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default function RangeInput({ name, value, onChange, disabled, label }) {
  return (
    <div>
      <label>{label}: </label>
      <input type="range" min="1" max="10" name={name} value={value} onChange={onChange} disabled={disabled} />
    </div>
  );
}


