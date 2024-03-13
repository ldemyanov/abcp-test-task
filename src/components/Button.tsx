interface IButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ onClick }: IButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      get random user
    </button>
  );
}

export default Button;
