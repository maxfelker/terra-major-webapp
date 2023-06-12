import PropTypes from 'prop-types';

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default function NumberInput({ name, value, onChange, disabled, label }) {
  return (
    <div>
      <label>{label}: </label>
      <input type="number" name={name} value={value} onChange={onChange} disabled={disabled} />
    </div>
  );
}
