import Image from "next/image";
import styles from "@/styles/modules/pages/page.module.scss";
import coin_banner from "@/assets/banners/coin_banner.svg";
import grow_banner from "@/assets/banners/grow_banner.svg";
import invest_banner from "@/assets/banners/invest_banner.svg";
import liquidate_banner from "@/assets/banners/liquidate_banner.svg";

const bannerInfo = [
  {
    title: "Stability and Pegging Mechanism",
    description:
      "In a world where many cryptocurrencies experience wild price swings, SSC stands out as a reliable and stable option. Its pegging mechanism ensures that its value remains steady, making it a practical and user-friendly digital currency for everyday use.",
    imageSrc: coin_banner,
  },
  {
    title: "Liquidity Provision",
    description:
      "Participants can provide liquidity to our DeFi ecosystem and earn rewards for their contributions. Liquidity provision is like having a well-stocked store, where customers can easily buy or sell SSC without causing significant price fluctuations. It ensures that SSC remains a practical and user-friendly option for all its users.",
    imageSrc: grow_banner,
  },
  {
    title: "Seamless Transactions",
    description:
      "SSC empowers users with the ability to conduct seamless transactions, offering a fast, cost-effective, and accessible way to handle financial activities. With its user-friendly features, SSC is becoming an increasingly popular choice for individuals and businesses in the digital economy.",
    imageSrc: invest_banner,
  },
  {
    title: "Send money around the globe quickly",
    description:
      "Sending money around the globe quickly with SSC is a game-changer for international transactions. It offers a seamless and cost-effective way to transfer funds, making it an attractive option for individuals and businesses alike.",
    imageSrc: liquidate_banner,
  },
];

const Home = () => {
  return (
    <div>
      <div className={styles.brand}>
        <div className={styles.brand__title}>SSC Finance</div>
        <div className={styles.brand__subtitle}>
          Decentralized Finance (DeFi) at its Finest
        </div>
        <div className={styles.brand__description}>
          At SSC Finance, we are proud to present a cutting-edge decentralized
          finance (DeFi) platform that revolutionizes the way we interact with
          financial services. Our platform is designed to offer secure,
          transparent, and permissionless financial solutions powered by
          blockchain technology.
        </div>
      </div>

      <div className={styles.flex__box}>
        {bannerInfo.map((banner, index) => (
          <div
            key={banner.title}
            className={`${styles.banner} ${
              index % 2 == 0 ? styles.banner : styles.banner__rev
            }`}
          >
            <div className={styles.banner__info}>
              <div className={styles.banner__title}>{banner.title}</div>
              <div className={styles.banner__description}>
                {banner.description}
              </div>
            </div>
            <Image
              className={styles.banner__img}
              src={banner.imageSrc}
              alt="Coin Stack Logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
