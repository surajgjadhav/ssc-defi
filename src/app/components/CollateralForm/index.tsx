import React from "react";
import styles from "@/app/styles/modules/components/collateralForm.module.scss";
import CollateralInput from "../CollateralInput";
import Button from "../Button";

export enum CollateralFormType {
  DEPOSIT = "Deposit",
  REDEEM = "Redeem",
}

export enum CollateralType {
  ETH = "Ethereum",
  BTC = "Bitcoin",
}

type CollateralFormProps = {
  className?: string;
  formType: CollateralFormType;
  amount: number;
  handleChangeAmount: (e: any) => void;
  collateralType: CollateralType;
  handleChangeCollateral: (e: any) => void;
  handleSubmit: () => boolean;
};

export default function CollateralForm({
  className = "",
  formType,
  amount,
  handleChangeAmount,
  collateralType,
  handleChangeCollateral,
  handleSubmit,
}: CollateralFormProps) {
  return (
    <form
      action=""
      method="post"
      className={`${styles.collateralForm} ${className}`}
      onSubmit={handleSubmit}
    >
      <CollateralInput
        label="Collateral Amount"
        amount={amount}
        handleChangeAmount={handleChangeAmount}
        collateralType={collateralType}
        handleChangeCollateral={handleChangeCollateral}
      />

      <Button type="submit" title={formType} />
    </form>
  );
}
