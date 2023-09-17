import React from "react";
import { CollateralType } from "../CollateralForm";
import styles from "@/app/styles/modules/components/collateralInput.module.scss";

type CollateralInputProp = {
  label?: string;
  amount: number;
  handleChangeAmount: (e: any) => void;
  collateralType: CollateralType;
  handleChangeCollateral: (e: any) => void;
};
export default function CollateralInput({
  label,
  amount,
  handleChangeAmount,
  collateralType,
  handleChangeCollateral,
}: CollateralInputProp) {
  const handleAmountChange = (e) => {
    handleChangeAmount(e.target.value);
  };

  const handleCollateralChange = (e) => {
    handleChangeCollateral(e.target.value);
  };

  return (
    <div className={styles.collateralInput}>
      {!!label && (
        <label
          htmlFor="collateralAmount"
          className={styles.collateralInput__label}
        >
          {label}
        </label>
      )}
      <div className={styles.collateralInput__container}>
        <input
          type="number"
          id="collateralAmount"
          name="collateralAmount"
          placeholder="Collateral Amount"
          value={amount}
          onChange={handleAmountChange}
          className={styles.collateralInput__amount}
          onWheel={(e) => e.target.blur()}
        />

        <select
          value={collateralType}
          onChange={handleCollateralChange}
          className={styles.collateralInput__type}
        >
          <option value={CollateralType.ETH}>ETH</option>
          <option value={CollateralType.BTC}>BTC</option>
        </select>
      </div>
    </div>
  );
}
