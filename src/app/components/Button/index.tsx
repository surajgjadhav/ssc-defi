import styles from "@/app/styles/modules/components/button.module.scss";
import { ButtonHTMLAttributes } from "react";
type buttonProps = {
  title: string;
  onClick?: any;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({ title, onClick, className = "", type }: buttonProps) => {
  return (
    <button
      className={`${styles.btn} ${className}`}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
