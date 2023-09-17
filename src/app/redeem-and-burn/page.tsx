"use client";
import BannerCard from "@/app/components/BannerCard";
import CollateralForSscForm, {
  CollateralForSscFormType,
} from "@/app/components/CollateralForSscForm";
import { CollateralType } from "@/app/components/CollateralForm";
import styles from "@/app/styles/modules/pages/redeemAndBurn.module.scss";
import React, { useState } from "react";

export default function RedeemAndBurn() {
  const [collateralAmount, setCollateralAmount] = useState<number>(0);
  const [collateralType, setCollateralType] = useState<string>(
    CollateralType.ETH
  );
  const [sscAmount, setSscAmount] = useState<number>(0);

  const handleRedeemCollateralForSsc = () => {
    return true;
  };

  return (
    <BannerCard
      imgSrc="/icons/Cash Payment-bro.svg"
      title="Redeem & Burn Collateral"
    >
      <CollateralForSscForm
        formType={CollateralForSscFormType.REDEEM_AND_BURN}
        collateralAmount={collateralAmount}
        handleChangeCollateralAmount={setCollateralAmount}
        sscAmount={sscAmount}
        handleChangeSscAmount={setSscAmount}
        handleSubmit={handleRedeemCollateralForSsc}
        collateralType={collateralType}
        handleChangeCollateral={setCollateralType}
      />
    </BannerCard>
  );
}
