import Image from "next/image";
import styles from "@/app/styles/modules/components/navbar.module.scss";
import Button from "@/app/components/Button";

type NavBarProps = {
  onBurgerClick: () => void;
};

const Navbar = ({ onBurgerClick }: NavBarProps) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__container}>
        <div className={styles.nav__menu}>
          <div className={styles.nav__brand}>
            <Image
              className={styles.nav__logo}
              src="/icons/coin.svg"
              width={32}
              height={32}
              alt="SSC DeFi Logo"
            />
            <div>SSC</div>
          </div>
        </div>
        <Button title="Connect" onClick={onBurgerClick} />
      </div>
    </nav>
  );
};

export default Navbar;
