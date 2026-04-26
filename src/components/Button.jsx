

const Button = ({ text, handleClick, disabled }) => {
  return (
    <button
      className={`f6 link br2 ph3 pv2 mb2 dib white ma2 ${
        disabled ? 'bg-gray' : 'bg-dark-blue dim'
      }`}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;