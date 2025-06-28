import { useState, MouseEventHandler } from "react";
import "./Checkbox.scss";
import { CN, CLSX, EN } from "../../utils";

type CheckboxProps = {
  showLabel?: boolean;
  label?: string;
};

const ComponentName = CN("Checkbox");
const parts = {
  container: ComponentName,
  checkbox: EN(ComponentName, "checkbox"),
  label: EN(ComponentName, "label"),
};

export const Checkbox = ({ showLabel = true, label }: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleOnChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <div className={CLSX(parts.container)}>
        <input
          className={CLSX(parts.checkbox)}
          type="checkbox"
          onChange={handleOnChange}
          checked={checked}
        />
        {showLabel && label !== undefined && (
          <label className={CLSX(parts.label)}>{label}</label>
        )}
      </div>
    </>
  );
};
