import Props from "@/types";
import { ChangeEvent, RefObject } from "react";
import styles from "./Input.module.css";
import { classNameWrapper } from "@/utils/className";

interface InputProps extends Props {
  autoFocus?: boolean;
  value: string | number;
  inputRef?: RefObject<HTMLInputElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  readOnly?: boolean;
  name: string;
  label: string;
}

const Input = ({
  autoFocus,
  value,
  inputRef,
  onChange,
  name,
  className,
  label,
  readOnly,
  type = "text",
}: InputProps) => {
  return (
    <div className={classNameWrapper(styles["input-container"], className)}>
      <label className={styles["input-label"]} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles["input"]}
        autoFocus={autoFocus}
        ref={inputRef}
        type={type}
        onChange={onChange}
        value={value}
        readOnly={readOnly}
      />
    </div>
  );
};

export default Input;
