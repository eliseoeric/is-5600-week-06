// Button.jsx
const Button = ({ text, handleClick, disabled }) => {
  return (
    <button
      className={`pa2 ma2 br2 ${disabled ? "bg-gray white" : "bg-blue white dim"}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
