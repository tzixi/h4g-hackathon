import React from "react";
import Image from "next/image";
import Head from "next/head";
import DataGridDemo from "../../../components/table/demo";
import styles from "./assessor.module.css";
import { fontWeight } from "@mui/system";
import { Fab } from "@mui/material";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
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
      <div style={{ backgroundColor: "#f9f9f9" }}>
        <div className={styles.description}>
          <div>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>
              ASSESSOR DASHBOARD - TAN AH GOW
            </p>
          </div>
          <div></div>
          <div className={styles.right}>
            <Image src="/user.png" alt="profile" width="50" height="50" />
            <Fab sx={{ margin: "0 20px" }} variant="extended">
              MY PROFILE
            </Fab>
            <Fab variant="extended">LOG OUT</Fab>
          </div>
        </div>
      </div>
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
