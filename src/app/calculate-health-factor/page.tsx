"use client";
import BannerCard from "@/app/components/BannerCard";
import Button from "@/app/components/Button";
import styles from "@/app/styles/modules/pages/calculateHealthFactor.module.scss";
import React, { useState } from "react";
import InputBox from "@/app/components/InputBox";
export default function CalculateHealthFactor() {
  const [collateralAmount, setCollateralAmount] = useState<number>(0);
  const [mintedAmount, setMintedAmount] = useState<number>(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("collateralAmount: ", collateralAmount);
    console.log("mintedAmount: ", mintedAmount);
  };
  return (
    <BannerCard
      imgSrc="/icons/Temperature Measurement-bro.svg"
      title="Health Factor"
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
          label="Collateral Amount in USD"
          placeHolder="$"
        />
        <InputBox
          type="number"
          name="Minted Amount"
          id="mintedAmount"
          initialValue={mintedAmount}
          onChangeInput={setMintedAmount}
          warning={mintedAmount < 0 ? "test" : ""}
          label="Minted Amount"
          placeHolder="Minted Amount"
        />
        <Button type="submit" title="Calculate" />
      </form>
    </BannerCard>
  );
}
