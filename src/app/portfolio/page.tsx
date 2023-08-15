import Card from "@/components/Card";
import styles from "@/styles/modules/pages/portfolio.module.scss";
import user from "@/assets/icons/user.svg";
import coin from "@/assets/icons/coin.svg";
import piggy_bank from "@/assets/icons/piggy-bank.svg";
import bitcoin_circle from "@/assets/icons/bitcoin-circle.svg";
import ethereum_circle from "@/assets/icons/ethereum-circle.svg";
import percentage_circle from "@/assets/icons/percentage-circle.svg";
import activity from "@/assets/icons/activity.svg";
import Image from "next/image";
import CollateralChart from "@/components/CollateralChart";
import PriceChart from "@/components/PriceChart";

type Investment = {
  name: string;
  icon: any;
  value: number | string;
  currency?: string;
};

const investmentDetails: Investment[] = [
  { name: "Collateral Amount", icon: piggy_bank, value: 123, currency: "USD" },
  { name: "SSC Balance", icon: coin, value: 123, currency: "USD" },
  { name: "Helath Factor", icon: activity, value: 123 },
  { name: "Liquidation Bonus", icon: percentage_circle, value: "10 %" },
];

const Portfolio: React.FC = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolio__container}>
        <Card>
          <div className={styles.portfolio__title}>User</div>
          <div className={styles.portfolio__user__logo}>
            <Image
              className={styles.portfolio__user__icon}
              src={user}
              alt="User Icon"
            />
          </div>
          <div className={styles.portfolio__user__id}>0x123....456</div>
        </Card>
        <div className={styles.portfolio__grid}>
          {investmentDetails.map((investment) => (
            <Card>
              <div className={styles.portfolio__info}>
                <div>
                  <div className={styles.portfolio__info__attribute}>
                    {investment.name}
                  </div>
                  <div className={styles.portfolio__info__value}>
                    {investment.value}
                    {investment.currency && (
                      <div className={styles.portfolio__badge}>
                        {investment.currency}
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.portfolio__icon__bg}>
                  <Image
                    className={styles.portfolio__icon}
                    src={investment.icon}
                    alt="health icon"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className={styles.portfolio__container}>
        <Card light={true}>
          <div className={styles.portfolio__title}>Collateral Info</div>
          <div className={styles.portfolio__chart}>
            <CollateralChart EthAmount={70} BtcAmount={30} />
          </div>
          <div className={styles.portfolio__chart__legend}>
            <div className={styles["portfolio__chart__legend-flex"]}>
              <Image
                className={styles["portfolio__chart__legend-icon"]}
                src={ethereum_circle}
                alt="User Icon"
              />
              <div>ETH</div>
            </div>

            <div className={styles["portfolio__chart__legend-flex"]}>
              <Image
                className={styles["portfolio__chart__legend-icon"]}
                src={bitcoin_circle}
                alt="User Icon"
              />
              <div>BTC</div>
            </div>
          </div>
        </Card>

        <Card light={true}>
          <div className={styles.portfolio__title}>Collateral Performance</div>
          <div
            className={`${styles["portfolio__chart"]} ${styles["portfolio__chart-price"]}`}
          >
            <PriceChart />
          </div>
          <div className={styles.portfolio__chart__legend}>
            <div className={styles["portfolio__chart__legend-flex"]}>
              <Image
                className={styles["portfolio__chart__legend-icon"]}
                src={ethereum_circle}
                alt="User Icon"
              />
              <div>ETH</div>
            </div>

            <div className={styles["portfolio__chart__legend-flex"]}>
              <Image
                className={styles["portfolio__chart__legend-icon"]}
                src={bitcoin_circle}
                alt="User Icon"
              />
              <div>BTC</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;
