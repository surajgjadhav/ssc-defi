import styles from "@/app/styles/modules/components/sideBar.module.scss";
import { forwardRef } from "react";
import NavLink from "../NavLink";
import coins from "@/app/assets/icons/coins.svg";
import piggy_bank from "@/app/assets/icons/piggy-bank.svg";
import stats_report from "@/app/assets/icons/stats-report.svg";
import fire_flame from "@/app/assets/icons/fire-flame.svg";
import coins_swap from "@/app/assets/icons/coins-swap.svg";
import calculator from "@/app/assets/icons/calculator.svg";

const SideBar = forwardRef(function SideBar(props, ref) {
  const depositeLinks = [
    { href: "/deposite", linkName: "Deposite Collateral" },
    { href: "/deposite-and-mint", linkName: "Deposite Collateral & Mint" },
  ];
  const redeemLinks = [
    { href: "/redeem", linkName: "Redeem Collateral" },
    { href: "/redeem-and-burn", linkName: "Redeem Collateral for SSC" },
  ];
  const calculateLinks = [
    { href: "/calculate-health-factor", linkName: "Health Factor" },
    { href: "/calculate-amount-in-usd", linkName: "Collateral Amount in USD" },
  ];
  return (
    <aside className={styles.sideBar} ref={ref}>
      <div className={styles.sideBar__container}>
        <NavLink href="/portfolio" linkName="Portfolio" logo={stats_report} />
        <NavLink title="Deposite" links={depositeLinks} logo={piggy_bank} />
        <NavLink title="Redeem" links={redeemLinks} logo={coins_swap} />
        <NavLink href="/mint" linkName="Mint" logo={coins} />
        <NavLink href="/burn" linkName="Burn" logo={fire_flame} />
        <NavLink title="Calculate" links={calculateLinks} logo={calculator} />
      </div>
    </aside>
  );
});

export default SideBar;
