"use client";
import styles from "@/app/styles/modules/pages/burn.module.scss";
import MintOrBurnForm, { FormType } from "@/app/components/MintOrBurnForm";
import { useState } from "react";
import BannerCard from "@/app/components/BannerCard";

const Burn = () => {
  const [burnAmount, setBurnAmount] = useState<number>(0);

  const burnSSC = () => {
    console.log(burnAmount);
    return true;
  };

  return (
    <BannerCard imgSrc="/icons/Fire ball-bro.svg" title="Burn SSC">
      <MintOrBurnForm
        formType={FormType.BURN}
        amount={burnAmount}
        handleChangeAmount={setBurnAmount}
        handleSubmit={burnSSC}
      />
    </BannerCard>
  );
};

export default Burn;
