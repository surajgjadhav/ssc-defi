import styles from '@/styles/modules/components/card.module.scss';

type cardProps = {
  children: React.ReactNode;
};
const Card = ({ children }: cardProps) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
