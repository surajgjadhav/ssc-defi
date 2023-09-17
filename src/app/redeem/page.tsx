"use client";
import BannerCard from "@/app/components/BannerCard";
import CollateralForm, {
  CollateralFormType,
  CollateralType,
} from "@/app/components/CollateralForm";
import styles from "@/app/styles/modules/pages/redeem.module.scss";
import React, { useState } from "react";

export default function Redeem() {
  const [collateralAmount, setCollateralAmount] = useState<number>(0);
  const [collateralType, setCollateralType] = useState<string>(
    CollateralType.ETH
  );

  const handleDepositeCollateral = () => {
    console.log(collateralAmount);
    console.log(collateralType);

    return true;
  };

  return (
    <BannerCard imgSrc="/icons/Currency-bro.svg" title="Redeem Collateral">
      <CollateralForm
        formType={CollateralFormType.REDEEM}
        amount={collateralAmount}
        handleChangeAmount={setCollateralAmount}
        handleSubmit={handleDepositeCollateral}
        collateralType={collateralType}
        handleChangeCollateral={setCollateralType}
      />
    </BannerCard>
  );
}
