import styles from "@/styles/modules/components/card.module.scss";

type cardProps = {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
};
const Card = ({ children, light, className }: cardProps) => {
  return (
    <div
      className={`${styles.card} ${light ? styles["card-light"] : ""} ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
