"use client";
import BannerCard from "@/app/components/BannerCard";
import CollateralForSscForm, {
  CollateralForSscFormType,
} from "@/app/components/CollateralForSscForm";
import { CollateralType } from "@/app/components/CollateralForm";
import React, { useState } from "react";
import styles from "@/app/styles/modules/pages/depositAndMint.module.scss";

export default function DepositAndMint() {
  const [collateralAmount, setCollateralAmount] = useState<number>(0);
  const [collateralType, setCollateralType] = useState<CollateralType>(
    CollateralType.ETH
  );
  const [sscAmount, setSscAmount] = useState<number>(0);

  const handleDepositCollateralForSsc = () => {
    return true;
  };

  return (
    <BannerCard
      imgSrc="/icons/Piggy bank-bro.svg"
      title="Deposit Collateral & Mint"
    >
      <CollateralForSscForm
        formType={CollateralForSscFormType.DEPOSIT_AND_MINT}
        collateralAmount={collateralAmount}
        handleChangeCollateralAmount={setCollateralAmount}
        sscAmount={sscAmount}
        handleChangeSscAmount={setSscAmount}
        handleSubmit={handleDepositCollateralForSsc}
        collateralType={collateralType}
        handleChangeCollateral={setCollateralType}
      />
    </BannerCard>
  );
}
