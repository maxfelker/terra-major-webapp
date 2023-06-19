import NumberInput from "../NumberInput"
import PropTypes from 'prop-types';
import styles from './styles.module.css';

Vector3GroupInput.propTypes = {
  vector3: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.required,
  label: PropTypes.string
};

export default function Vector3GroupInput(props) {
  const { vector3, handleChange, name, label } = props;
  return (
    <div>
      <NumberInput  
          name={`${name}.x`}
          value={vector3.x} 
          onChange={handleChange} 
          label={`${label} X`} 
          className={styles.vector}
        />
      <NumberInput  
          name={`${name}.y`}
          value={vector3.y} 
          onChange={handleChange} 
          label={`${label} Y`} 
          className={styles.vector}
        />
      <NumberInput  
          name={`${name}.z`}
          value={vector3.z} 
          onChange={handleChange} 
          label={`${label} Z`} 
          className={styles.vector}
        />
      </div>
  )
}