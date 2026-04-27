const Button = ({ text, handleClick, disabled }) => {
  return (
    <button
      className="pa2 ma2 bg-blue white"
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;