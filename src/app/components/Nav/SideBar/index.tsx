import styles from "@/app/styles/modules/components/sideBar.module.scss";
import { forwardRef } from "react";
import NavLink from "../NavLink";

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
        <NavLink
          href="/portfolio"
          linkName="Portfolio"
          logo="/icons/stats-report.svg"
        />
        <NavLink
          title="Deposite"
          links={depositeLinks}
          logo="/icons/piggy-bank.svg"
        />
        <NavLink
          title="Redeem"
          links={redeemLinks}
          logo="/icons/coins-swap.svg"
        />
        <NavLink href="/mint" linkName="Mint" logo="/icons/coins.svg" />
        <NavLink href="/burn" linkName="Burn" logo="/icons/fire-flame.svg" />
        <NavLink
          title="Calculate"
          links={calculateLinks}
          logo="/icons/calculator.svg"
        />
      </div>
    </aside>
  );
});

export default SideBar;
