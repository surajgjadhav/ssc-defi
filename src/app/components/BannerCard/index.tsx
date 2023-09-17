import React from "react";
import Image from "next/image";
import styles from "@/app/styles/modules/components/BannerCard.module.scss";
type BannerCardProp = {
  imgSrc: string;
  title: string;
  children?: any;
};

export default function BannerCard({
  imgSrc,
  title,
  children,
}: BannerCardProp) {
  return (
    <div className={styles.bannerCard}>
      <div className={styles.bannerCard__banner}>
        <Image
          className={styles.bannerCard__img}
          src={imgSrc}
          alt="Banner Icon"
        />
        <div className={styles.bannerCard__title}>{title}</div>
      </div>
      <div className={styles.bannerCard__content}>{children}</div>
    </div>
  );
}
