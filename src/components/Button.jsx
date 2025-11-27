const Button = ({ text, handleClick, disabled }) => {
  return (
    <button
      className="pa3 bg-black white ma2 pointer"
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
