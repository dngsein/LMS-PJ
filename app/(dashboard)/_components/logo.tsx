import Image from "next/image";
import React from "react";

export const Logo = () => {
  return <Image height={35} width={35} src={"/logo.svg"} alt={"logo"} />;
};
