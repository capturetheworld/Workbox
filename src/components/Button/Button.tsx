import "./Button.scss";
import { ButtonHTMLAttributes } from "react";
import { CN, CLSX, EN } from "../../utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** The variant of the button.
   * @default "primary" */
  variant?: "primary" | "secondary";

  /** The size of the button.
   * @default "medium" */
  size?: "small" | "medium" | "large";

  buttonText: string;
};

const ComponentName = CN("Button");
const parts = {
  button: ComponentName,
  text: EN(ComponentName, "text"),
};

export const Button = ({
  variant = "primary",
  size = "medium",
  buttonText,
}: ButtonProps) => {
  return (
    <button className={CLSX(parts.button, variant, size)}>
      <span className={CLSX(parts.text)}>{buttonText}</span>
    </button>
  );
};
