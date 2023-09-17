"use client";
import BannerCard from "@/app/components/BannerCard";
import CollateralForm, {
  CollateralFormType,
  CollateralType,
} from "@/app/components/CollateralForm";
import React, { useState } from "react";
import styles from "@/app/styles/modules/pages/deposite.module.scss";

export default function Deposite() {
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
    <BannerCard imgSrc="/icons/piggy_svg.svg" title="Deposite Collateral">
      <CollateralForm
        formType={CollateralFormType.DEPOSITE}
        amount={collateralAmount}
        handleChangeAmount={setCollateralAmount}
        handleSubmit={handleDepositeCollateral}
        collateralType={collateralType}
        handleChangeCollateral={setCollateralType}
      />
    </BannerCard>
  );
}
