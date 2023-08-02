import Image from 'next/image';
import styles from '@/styles/modules/pages/page.module.scss';
import coin_banner from '@/assets/banners/coin_banner.svg';
import grow_banner from '@/assets/banners/grow_banner.svg';
import invest_banner from '@/assets/banners/invest_banner.svg';
import liquidate_banner from '@/assets/banners/liquidate_banner.svg';
export default function Home() {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.banner__info}>
          <div className={styles.banner__title}>ABCD</div>
          <div className={styles.banner__description}>PQRS</div>
        </div>
        <Image
          className={styles.banner__img}
          src={coin_banner}
          alt="Coin Stack Logo"
        />
      </div>

      <div className={`${styles.banner} ${styles.banner__rev}`}>
        <div className={styles.banner__info}>
          <div className={styles.banner__title}>ABCD</div>
          <div className={styles.banner__description}>PQRS</div>
        </div>
        <Image
          className={styles.banner__img}
          src={grow_banner}
          alt="Coin Stack Logo"
        />
      </div>

      <div className={styles.banner}>
        <div className={styles.banner__info}>
          <div className={styles.banner__title}>ABCD</div>
          <div className={styles.banner__description}>PQRS</div>
        </div>
        <Image
          className={styles.banner__img}
          src={invest_banner}
          alt="Coin Stack Logo"
        />
      </div>

      <div className={`${styles.banner} ${styles.banner__rev}`}>
        <div className={styles.banner__info}>
          <div className={styles.banner__title}>ABCD</div>
          <div className={styles.banner__description}>PQRS</div>
        </div>
        <Image
          className={styles.banner__img}
          src={liquidate_banner}
          alt="Coin Stack Logo"
        />
      </div>
    </div>
  );
}
