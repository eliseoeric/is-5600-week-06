export default function Button({ text, handleClick, disabled = false }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className="f5 black bg-white pa3 ba"
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1
      }}
    >
      {text}
    </button>
  );
}