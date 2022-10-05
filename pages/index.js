import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import nft from "../nft.json";
import Nav from "../component/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <h1>Go to Marketplace Menu</h1>
    </div>
  );
}
