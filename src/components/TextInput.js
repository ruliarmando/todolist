import React from 'react';

const TextInput = ({ value, onChange, onEnterPress, placeholder }) => {
  const handleKeyPress = (e) => {
    const { value } = e.target;
    if (e.key === 'Enter' && value !== '') {
      onEnterPress(value);
    }
  };
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyPress={handleKeyPress}
      placeholder={placeholder}
      className="appearance-none w-full p-2 border rounded-lg focus:outline-none focus:shadow-outline shadow-inner"
    />
  );
};

export default TextInput;
