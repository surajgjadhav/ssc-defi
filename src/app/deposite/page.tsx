"use client";
import BannerCard from "@/app/components/BannerCard";
import CollateralForm, {
  CollateralFormType,
  CollateralType,
} from "@/app/components/CollateralForm";
import React, { useState } from "react";
import styles from "@/app/styles/modules/pages/deposite.module.scss";
import piggyBank from "@/app/assets/icons/piggy-bank.svg";

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
    <BannerCard imgSrc={piggyBank} title="Deposite Collateral">
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
