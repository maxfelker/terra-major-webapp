import PropTypes from 'prop-types';

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default function TextInput({ name, value, onChange, disabled, label }) {
  return (
    <div>
      <label>{label}: </label>
      <input name={name} value={value} onChange={onChange} disabled={disabled} />
    </div>
  );
}