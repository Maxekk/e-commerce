import React from "react";
import Image from "next/image";
type Props = {};

export default function Banner({}: Props) {
  return <Image src="/Banner.jpg" alt="" width="1920" height="500"></Image>;
}
