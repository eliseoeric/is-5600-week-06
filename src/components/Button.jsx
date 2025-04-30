const Button = ({ text, handleClick, disabled }) => (
  <button
    className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue mh2"
    onClick={handleClick}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;
