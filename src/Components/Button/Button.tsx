import "./Button.scss";

type ButtonProps = {
  onClickFunction?: () => void;
  btnName: string;
  iconRight?: string;
  iconLeft?: string;
};

const Button: React.FC<ButtonProps> = ({
  onClickFunction,
  btnName,
  iconRight,
  iconLeft,
}) => {
  return (
    <>
      <button
        className="Button"
        onClick={onClickFunction && onClickFunction}
        disabled={!onClickFunction}
      >
        <span>
          {iconLeft && iconLeft}
          {btnName}
          {iconRight && iconRight}
        </span>
      </button>
    </>
  );
};

export default Button;
