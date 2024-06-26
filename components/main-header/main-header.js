import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";
import Navbar from "./nav-bar";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A table full of delicious food." priority />{" "}
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <Navbar />
      </nav>
    </header>
  );
}
