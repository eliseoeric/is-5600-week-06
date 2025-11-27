const Button = ({ text, handleClick, disabled }) => {
  return (
    <button
      className="pa2 ma2 bg-black white br2"
      onClick={handleClick}
      disabled={disabled}
      style={{ opacity: disabled ? 0.4 : 1 }}
    >
      {text}
    </button>
  );
};

export default Button;
