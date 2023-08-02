import styles from '@/styles/modules/components/navbar.module.scss';
import Button from '../Button';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__menu}>
        <div>SSC</div>
        <div>abcd</div>
      </div>
      <Button title="Connect" />
    </nav>
  );
};

export default Navbar;
