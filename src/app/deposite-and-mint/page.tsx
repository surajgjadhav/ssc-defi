"use client";
import BannerCard from "@/app/components/BannerCard";
import CollateralForSscForm, {
  CollateralForSscFormType,
} from "@/app/components/CollateralForSscForm";
import { CollateralType } from "@/app/components/CollateralForm";
import React, { useState } from "react";
import styles from "@/app/styles/modules/pages/depositeAndMint.module.scss";

export default function DepositeAndMint() {
  const [collateralAmount, setCollateralAmount] = useState<number>(0);
  const [collateralType, setCollateralType] = useState<string>(
    CollateralType.ETH
  );
  const [sscAmount, setSscAmount] = useState<number>(0);

  const handleDepositeCollateralForSsc = () => {
    return true;
  };

  return (
    <BannerCard
      imgSrc="/icons/Piggy bank-bro.svg"
      title="Deposite & Mint Collateral"
    >
      <CollateralForSscForm
        formType={CollateralForSscFormType.DEPOSITE_AND_MINT}
        collateralAmount={collateralAmount}
        handleChangeCollateralAmount={setCollateralAmount}
        sscAmount={sscAmount}
        handleChangeSscAmount={setSscAmount}
        handleSubmit={handleDepositeCollateralForSsc}
        collateralType={collateralType}
        handleChangeCollateral={setCollateralType}
      />
    </BannerCard>
  );
}
