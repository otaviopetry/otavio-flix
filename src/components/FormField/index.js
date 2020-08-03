import React from 'react';

function FormField ({ label, value, type, name, onChange }) {
    return (
        <div>
          <label>
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

export default FormField;