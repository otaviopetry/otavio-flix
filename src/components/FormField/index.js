import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  label, value, type, name, onChange,
}) {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <input
          type={type}
          name={name}
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
