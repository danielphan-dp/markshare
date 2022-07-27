import React from 'react';

const Input = ({ title, type, placeholder, value, setValue }) => {
  return (
    <div class="form-group mb-4">
      <label className="fw-bold mb-1">{title}</label>
      <input
        type={type}
        class="form-control"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
