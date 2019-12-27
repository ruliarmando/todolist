import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({ label, name, id, checked, value, onChange }) {
  return (
    <label className="cbx__container">
      <span className={checked ? 'line-through text-gray-500' : ''}>{label}</span>
      <input
        name={name}
        onChange={onChange}
        id={id}
        checked={checked}
        value={value}
        type="checkbox"
      />
      <span className="cbx__checkmark" />
    </label>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  value: PropTypes.string,
};

export default Checkbox;
