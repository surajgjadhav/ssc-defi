import Card from '@/components/Card';
import styles from '@/styles/modules/pages/portfolio.module.scss';
import user_icon from '@/assets/icons/user_icon.png';
import heart_icon from '@/assets/icons/heart_icon.png';
import Image from 'next/image';
import CollateralChart from '@/components/CollateralChart';

const Portfolio: React.FC = () => {
  return (
    <div className={styles.portfolio}>
      <Card>
        <Image
          className={styles.portfolio__user__icon}
          src={user_icon}
          alt="User Icon"
        />
        <div>ABCD</div>
      </Card>
      <Card>
        <Image
          className={styles.portfolio__user__icon}
          src={heart_icon}
          alt="Heart Icon"
        />
        <CollateralChart />
        <div>ANVCF</div>
      </Card>
    </div>
  );
};

export default Portfolio;
