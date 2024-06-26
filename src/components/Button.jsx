const Button = ({ label, iconURL, backgroundColor,
  textColor,
  borderColor, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} hover:border-purple-500 hover:text-purple-500 ${textColor} ${borderColor}`
          : "bg-purple-500 text-white border-purple-500 hover:bg-purple-700"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;
