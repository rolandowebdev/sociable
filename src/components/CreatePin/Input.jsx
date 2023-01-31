function InputPin({ otherClass = '', type = 'text', value, action, placeholder, id }) {
  return (
    <input
      className={`${
        otherClass ||
        'py-2 text-base placeholder:text-base border-b-[1px] block border-gray-200 outline-none sm:text-lg'
      }`}
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={action}
      placeholder={placeholder}
    />
  );
}

export default InputPin;
