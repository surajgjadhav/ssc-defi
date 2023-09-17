"use client";
import styles from "@/app/styles/modules/pages/mint.module.scss";
import coin from "@/app/assets/icons/coin.svg";
import MintOrBurnForm, { FormType } from "@/app/components/MintOrBurnForm";
import { useState } from "react";
import BannerCard from "@/app/components/BannerCard";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const Mint = () => {
  const [mintAmount, setMintAmount] = useState<number>(0);
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/mint");
    },
  });

  // console.log("data: ", session);

  const mintSSC = () => {
    console.log(mintAmount);
    return true;
  };

  return (
    <BannerCard imgSrc={coin} title="Mint SSC">
      <MintOrBurnForm
        formType={FormType.MINT}
        amount={mintAmount}
        handleChangeAmount={setMintAmount}
        handleSubmit={mintSSC}
      />
    </BannerCard>
  );
};

export default Mint;
