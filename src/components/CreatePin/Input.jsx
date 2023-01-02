import React from 'react';

const InputPin = ({ otherClass = '', type = 'text', value, action, placeholder, name }) => {
  return (
    <input
      className={`${
        otherClass ||
        'py-2 text-base placeholder:text-base border-b-[1px] block border-gray-200 outline-none sm:text-lg'
      }`}
      type={type}
      name={name}
      value={value}
      onChange={action}
      placeholder={placeholder}
    />
  );
};

export default InputPin;
