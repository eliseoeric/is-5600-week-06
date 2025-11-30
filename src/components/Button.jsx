// Button.jsx
const Button = ({ text, handleClick, disabled }) => {
  return (
    <button
      className="pa2 ma2 ba br2"
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
