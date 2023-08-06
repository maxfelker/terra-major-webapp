import PropTypes from 'prop-types';

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

function setType(type){
  if(!type) {
    return 'text';
  }
  return type;
}

export default function TextInput(props) {
  const { name, value, onChange, disabled, label, type, placeholder } = props;
  return (
    <div>
      {label && <label>{label}: </label>}
      <input 
        name={name} 
        placeholder={placeholder}
        value={value} 
        onChange={onChange} 
        type={setType(type)}
        disabled={disabled} />
    </div>
  );
}