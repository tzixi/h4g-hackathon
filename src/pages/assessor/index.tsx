import React from "react";
import Image from "next/image";
import Head from "next/head";
import DataGridDemo from "../../../components/table/demo";
import styles from "./assessor.module.css";
import { fontWeight } from "@mui/system";
import { Fab } from "@mui/material";
import UserBar from "components/UserBar/UserBar";

function Home() {
  return (
    <div style={{ padding: "20px", width: "100%" }}>
      <Head>
        <title>Assessor Page</title>
      </Head>
      <div
        style={{
          overflow: "hidden",
          objectPosition: "bottom",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Image src="/InclusionLabLogo.png" alt="me" width="500" height="118" />
      </div>
      <UserBar isAssessor />
      <div style={{ backgroundColor: "#f9f9f9" }}>
        <div className={styles.left}>
          <p style={{ fontSize: "20px", fontWeight: "700" }}>
            WEBSITE(S) AVAILABLE FOR ASSESSMENT
          </p>
        </div>
      </div>
      <main className={styles.main}>
        <DataGridDemo />
      </main>
    </div>
  );
}

export default Home;
