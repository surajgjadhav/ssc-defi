"use client";
import React, { useState } from "react";
import BannerCard from "@/app/components/BannerCard";
import InputBox from "@/app/components/InputBox";
import styles from "@/app/styles/modules/pages/calculateHealthFactor.module.scss";
import Button from "@/app/components/Button";

export default function CalculateAmountInUsd() {
  const [collateralAmount, setCollateralAmount] = useState<number>(0);

  const handleSubmit = (e) => {
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
        <InputBox
          type="number"
          name="Collateral Amount"
          id="collateralAmount"
          initialValue={collateralAmount}
          onChangeInput={setCollateralAmount}
          warning={collateralAmount < 0 ? "test" : ""}
          label="Collateral Amount"
          placeHolder="$"
        />
        <Button type="submit" title="Calculate" />
      </form>
    </BannerCard>
  );
}
