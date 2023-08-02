import styles from '@/styles/modules/components/button.module.scss';
type buttonProps = {
  title: string;
  onClick?: any;
};

const Button = (props: buttonProps) => {
  return <button className={styles.btn}>{props.title}</button>;
};

export default Button;
