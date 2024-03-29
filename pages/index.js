import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Form from "./Form";
import Story from "./Story";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Madlibs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <img
        src="../magazine-word-background-13459139.jpg"
        className="background-img"
      ></img> */}
      <>
        <div className="header">
          <h1 className="main-title">MADLIBS!</h1>
      
        </div>
        <Form />
      </>
    </>
  );
}
