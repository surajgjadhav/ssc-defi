"use client";
import BannerCard from "@/app/components/BannerCard";
import CollateralForm, {
  CollateralFormType,
  CollateralType,
} from "@/app/components/CollateralForm";
import React, { useState } from "react";
import styles from "@/app/styles/modules/pages/deposit.module.scss";

export default function Deposit() {
  const [collateralAmount, setCollateralAmount] = useState<number>(0);
  const [collateralType, setCollateralType] = useState<string>(
    CollateralType.ETH
  );

  const handleDepositCollateral = () => {
    console.log(collateralAmount);
    console.log(collateralType);

    return true;
  };

  return (
    <BannerCard imgSrc="/icons/piggy_svg.svg" title="Deposit Collateral">
      <CollateralForm
        formType={CollateralFormType.DEPOSIT}
        amount={collateralAmount}
        handleChangeAmount={setCollateralAmount}
        handleSubmit={handleDepositCollateral}
        collateralType={collateralType}
        handleChangeCollateral={setCollateralType}
      />
    </BannerCard>
  );
}
