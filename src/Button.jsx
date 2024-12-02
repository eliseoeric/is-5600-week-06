const Button = ({ text, handleClick, disabled }) => (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="pa2 ba b--black bg-white pointer"
    >
      {text}
    </button>
  );
  
  export default Button;
  