import React from "react";
import styles from "@/app/styles/modules/components/inputBox.module.scss";

type InputBoxProp = {
  type?: "text" | "number";
  id: string;
  name?: string;
  placeHolder?: string;
  initialValue?: any;
  onChangeInput?: (e: any) => void;
  label?: string;
  warning?: string;
  required?: boolean;
  className?: string;
};

export default function InputBox({
  type,
  id,
  name = "",
  placeHolder = "",
  initialValue,
  onChangeInput,
  label = "",
  warning = "",
  required = false,
  className = "",
}: InputBoxProp) {
  return (
    <div className={styles.inputBox}>
      {!!label && (
        <label name={label} htmlFor={id} className={styles.inputBox__label}>
          {label}
        </label>
      )}
      <input
        type={!!type ? type : ""}
        id={id}
        name={name}
        placeholder={placeHolder}
        value={initialValue}
        onChange={(e) => onChangeInput(e.target.value)}
        required={required}
        className={`${styles.inputBox__container} ${className}`}
        onScroll={(e) => e.preventDefault()}
      />
      {!!warning && <p className={styles.inputBox__warning}>{warning}</p>}
    </div>
  );
}
