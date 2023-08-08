import Image from "next/image";
import styles from "@/styles/modules/components/navbar.module.scss";
import Button from "../Button";
import coin from "@/assets/icons/coin.svg";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__container}>
        <div className={styles.nav__menu}>
          <div className={styles.nav__brand}>
            <Image
              className={styles.nav__logo}
              src={coin}
              alt="SSC DeFi Logo"
            />
            <div>SSC</div>
          </div>
          <div>Portfolio</div>
        </div>
        <Button title="Connect" />
      </div>
    </nav>
  );
};

export default Navbar;
