"use client";
import React, { useState } from "react";
import BannerCard from "@/app/components/BannerCard";
import InputBox from "@/app/components/InputBox";
import styles from "@/app/styles/modules/pages/calculateHealthFactor.module.scss";
import Button from "@/app/components/Button";
import CollateralInput from "../components/CollateralInput";
import { CollateralType } from "../components/CollateralForm";

export default function CalculateAmountInUsd() {
  const [collateralAmount, setCollateralAmount] = useState<number>(0);
  const [collateralType, setCollateralType] = useState<CollateralType>(
    CollateralType.ETH
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("collateralAmount: ", collateralAmount);
  };
  return (
    <BannerCard
      imgSrc="/icons/Manage money-bro.svg"
      title="Collateral Amount in USD"
    >
      <form
        action=""
        method="post"
        className={styles.calculateHealthFactor__form}
        onSubmit={handleSubmit}
      >
        <CollateralInput
          label="Collateral Amount"
          amount={collateralAmount}
          collateralType={collateralType}
          handleChangeAmount={setCollateralAmount}
          handleChangeCollateral={setCollateralType}
        />
        <Button type="submit" title="Calculate" />
      </form>
    </BannerCard>
  );
}
