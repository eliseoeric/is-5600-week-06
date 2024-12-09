const Button = ({ text, handleClick, disabled }) => {
  return (
    <button
      className={`pa3 mr2 ba ${
        disabled ? "bg-light-gray" : "bg-light-blue"
      }`}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
