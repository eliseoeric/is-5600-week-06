export default function Button({ text, handleClick, disabled = false }) {
  return (
    <button
      type="button"
      className={`f5 black bg-white inline-flex items-center pa3 ba border-box mr4 ${
        disabled ? 'o-50' : 'pointer bg-animate hover-bg-black hover-white'
      }`}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="pl1">{text}</span>
    </button>
  );
}