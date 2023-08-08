import Card from "@/components/Card";
import styles from "@/styles/modules/pages/portfolio.module.scss";
import user_icon from "@/assets/icons/user_icon.png";
import heart_icon from "@/assets/icons/heart_icon.png";
import Image from "next/image";
import CollateralChart from "@/components/CollateralChart";

const Portfolio: React.FC = () => {
  return (
    <div className={styles.portfolio}>
      <Card>
        <div className={styles.portfolio__title}>Personal Info</div>
        <Image
          className={styles.portfolio__user__icon}
          src={user_icon}
          alt="User Icon"
        />
        <div className={styles.portfolio__user__id}>0x123....456</div>
      </Card>

      <Card>
        <div className={styles.portfolio__title}>Collateral Info</div>

        <div className={styles.portfolio__chart}>
          <CollateralChart EthAmount={70} BtcAmount={30} />
        </div>
      </Card>

      <Card>
        <div className={styles.portfolio__title}>Health factor</div>
        <Image
          className={styles.portfolio__helath__icon}
          src={heart_icon}
          alt="Heart Icon"
        />
        <div className={styles.portfolio__helath}>88%</div>
      </Card>
    </div>
  );
};

export default Portfolio;
