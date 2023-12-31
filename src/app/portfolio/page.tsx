import Card from "@/app/components/Card";
import styles from "@/app/styles/modules/pages/portfolio.module.scss";
import Image from "next/image";
import CollateralChart from "@/app/components/CollateralChart";
import PriceChart from "@/app/components/PriceChart";

type Investment = {
  name: string;
  icon: any;
  value: number | string;
  currency?: string;
};

const investmentDetails: Investment[] = [
  {
    name: "Collateral Amount",
    icon: "/icons/piggy-bank.svg",
    value: 123,
    currency: "USD",
  },
  { name: "SSC Balance", icon: "/icons/coin.svg", value: 123, currency: "USD" },
  { name: "Helath Factor", icon: "/icons/activity.svg", value: 123 },
  {
    name: "Liquidation Bonus",
    icon: "/icons/percentage-circle.svg",
    value: "10 %",
  },
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
              src="/icons/user.svg"
              alt="User Icon"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.portfolio__user__id}>0x123....456</div>
        </Card>
        <div className={styles.portfolio__grid}>
          {investmentDetails.map((investment) => (
            <Card key={investment.name}>
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
                    height={24}
                    width={24}
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
                src="/icons/ethereum-circle.svg"
                alt="User Icon"
                width={24}
                height={24}
              />
              <div>ETH</div>
            </div>

            <div className={styles["portfolio__chart__legend-flex"]}>
              <Image
                className={styles["portfolio__chart__legend-icon"]}
                src="/icons/bitcoin-circle.svg"
                alt="User Icon"
                width={24}
                height={24}
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
                src="/icons/ethereum-circle.svg"
                alt="User Icon"
                width={24}
                height={24}
              />
              <div>ETH</div>
            </div>

            <div className={styles["portfolio__chart__legend-flex"]}>
              <Image
                className={styles["portfolio__chart__legend-icon"]}
                src="/icons/bitcoin-circle.svg"
                alt="User Icon"
                width={24}
                height={24}
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
