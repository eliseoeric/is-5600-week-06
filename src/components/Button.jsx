export default function Button({ text, handleClick, disabled = false }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={
        "f6 no-underline bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba b--black-20 br2 " +
        (disabled ? "o-50" : "")
      }
    >
      {text}
    </button>
  );
}