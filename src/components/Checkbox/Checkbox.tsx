import { useState, MouseEventHandler } from "react";
import "./Checkbox.scss";
import { CN, CLSX, EN } from "../../utils";

type CheckboxProps = {
  showLabel?: boolean;
  label?: string;
};

const ComponentName = CN("Checkbox");
const parts = {
  checkbox: ComponentName,
  checkmark: EN(ComponentName, "checkmark"),
};

export const Checkbox = ({ showLabel = false, label }: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleOnClick = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <label className={CLSX(parts.checkbox)}>
        <input type="checkbox" onClick={handleOnClick} checked={checked} />
        {showLabel && label !== undefined && (
          <span className={CLSX(parts.checkmark)}>{label}</span>
        )}
      </label>
    </>
  );
};
