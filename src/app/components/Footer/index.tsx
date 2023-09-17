import styles from "@/app/styles/modules/components/footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div>Developed with Love ❤️</div>
        <Link
          href="https://storyset.com/people"
          target="_blank"
          className={styles.footer__link}
        >
          People illustrations by Storyset
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
