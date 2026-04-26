const Button = ({ text, handleClick, disabled }) => {
  return (
    <button
      className="f6 link dim br1 ba ph3 pv2 mb2 dib black mr2"
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;