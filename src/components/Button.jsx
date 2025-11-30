const Button = ({ text, handleClick, isDisabled }) => {
  return (
    <button
      className="f6 link dim br-pill ba ph3 pv2 ma2 dib dark-gray"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
