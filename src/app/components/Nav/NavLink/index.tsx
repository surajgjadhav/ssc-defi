"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/modules/components/navLink.module.scss";
import { useState } from "react";
import { usePathname } from "next/navigation";

type LinkProps = {
  href: string;
  linkName: string;
  logo?: any;
};

type MultiLinkProps = {
  title: string;
  links: LinkProps[];
  logo: any;
};

type NavLinkProps = LinkProps | MultiLinkProps;

const NavLink = (props: NavLinkProps) => {
  const [hide, setHide] = useState(true);
  const path = usePathname();

  return (
    <>
      {props.hasOwnProperty("title") ? (
        <>
          <div
            type="button"
            aria-controls="nav-list"
            onClick={() => setHide(!hide)}
          >
            <Link
              className={`${styles["navLink"]} ${
                !!props.links.find((link) => link.href == path)
                  ? styles["navLink-active__border"]
                  : ""
              }`}
              href=""
            >
              <div className={styles.navLink__img__bg}>
                <Image
                  className={styles.navLink__img}
                  src={props.logo}
                  width={32}
                  height={32}
                  alt="navLink"
                />
              </div>
              {props.title}
            </Link>
          </div>
          <div id="nav-list" className={hide ? "hide" : ""}>
            {props.links.map((link) => (
              <Link href={link.href} key={link.linkName}>
                <div
                  className={`${styles["navLink"]} ${
                    link.href == path ? styles["navLink-active"] : ""
                  }`}
                >
                  {link.linkName}
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <Link href={props.href}>
          <div
            className={`${styles["navLink"]} ${
              props.href == path ? styles["navLink-active__border"] : ""
            }`}
          >
            <div className={styles.navLink__img__bg}>
              <Image
                className={styles.navLink__img}
                src={props.logo}
                width={32}
                height={32}
                alt="navLink"
              />
            </div>
            {props.linkName}
          </div>
        </Link>
      )}
    </>
  );
};

export default NavLink;
