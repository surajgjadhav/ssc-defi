import React from "react";
import styles from "@/app/styles/modules/components/mintOrBurnForm.module.scss";
import Button from "../Button";
import InputBox from "../InputBox";
export enum FormType {
  MINT = "Mint",
  BURN = "Burn",
}

type MintOrBurnFormProps = {
  className?: string;
  formType: FormType;
  amount: number;
  handleChangeAmount: (e: any) => void;
  handleSubmit: () => boolean;
};

export default function MintOrBurnForm({
  className = "",
  formType,
  amount,
  handleChangeAmount,
  handleSubmit,
}: MintOrBurnFormProps) {
  const handleAmountChange = (e) => {
    handleChangeAmount(e.target.value);
  };
  return (
    <form
      action=""
      method="post"
      className={`${styles.mintOrBurnForm} ${className}`}
      onSubmit={handleSubmit}
    >
      <InputBox
        type="number"
        name="amount"
        id="amount"
        initialValue={amount}
        onChangeInput={handleAmountChange}
        warning={amount < 0 ? "test" : ""}
        label="Amount"
        placeHolder="Amount"
      />

      <Button type="submit" title={formType} />
    </form>
  );
}
