import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

export default function Logo() {
  return (
    <Link href="/">
      <Image width="300" height="80" src={logo} alt="logo" priority />
    </Link>
  );
}
