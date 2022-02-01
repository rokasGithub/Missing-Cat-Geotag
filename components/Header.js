import React from "react";
import Image from "next/image"


export default function Header() {
  return (
    <div className="header-container">
    <h1>Missing cats in the last week{" "}</h1>
    {/* <Image className="header-image" alt="High traffic icon" width={50} height={50}  src="/kitie.svg" /> */}
    </div>
  );
}
