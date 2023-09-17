import React from "react";
import styles from "@/app/styles/modules/components/collateralForSscForm.module.scss";
import { CollateralType } from "../CollateralForm";
import CollateralInput from "../CollateralInput";
import Button from "../Button";
import InputBox from "../InputBox";

export enum CollateralForSscFormType {
  DEPOSITE_AND_MINT = "Deposite & Mint",
  REDEEM_AND_BURN = "Redeem & Burn",
}

type CollateralFormProps = {
  className?: string;
  formType: CollateralForSscFormType;
  collateralAmount: number;
  handleChangeCollateralAmount: (e: any) => void;
  sscAmount: number;
  handleChangeSscAmount: (e: any) => void;
  collateralType: CollateralType;
  handleChangeCollateral: (e: any) => void;
  handleSubmit: () => boolean;
};

export default function CollateralForSscForm({
  className = "",
  formType,
  collateralAmount,
  handleChangeCollateralAmount,
  sscAmount,
  handleChangeSscAmount,
  collateralType,
  handleChangeCollateral,
  handleSubmit,
}: CollateralFormProps) {
  return (
    <form
      action=""
      method="post"
      className={`${styles.collateralForSscForm} ${className}`}
      onSubmit={handleSubmit}
    >
      <CollateralInput
        label="Collateral Amount"
        amount={collateralAmount}
        collateralType={collateralType}
        handleChangeAmount={handleChangeCollateralAmount}
        handleChangeCollateral={handleChangeCollateral}
      />

      <InputBox
        type="number"
        name="SSC Amount"
        id="sscAmount"
        initialValue={sscAmount}
        onChangeInput={handleChangeSscAmount}
        warning={sscAmount < 0 ? "test" : ""}
        label="SSC Amount"
        placeHolder="Minted Amount"
      />

      <Button type="submit" title={formType} />
    </form>
  );
}
