import React from "react";
import Image from "next/image";
import Head from "next/head";
import DataGridDemo from "../../../components/table/demo";
import styles from "./assessor.module.css";

function Home() {
  return (
    <>
      <Head>
        <title>Assessor Page</title>
      </Head>
      <div style={{ overflow: "hidden", objectPosition: "bottom", backgroundColor: "#f9f9f9" }}>
        <Image src="/InclusionLabLogo.png" alt="me" width="500" height="118" />
      </div>
      <div style={{backgroundColor: "#f9f9f9"}}>    
        <div className={styles.description}>
          <div>
            <p>Assessor Name: Tan Ah Gow</p>
          </div>
          <div></div>
            <div className={styles.right}>
              <Image src="/user.png" alt="profile" width="50" height="50"/>
              <p>Login</p>
              <p>My Profile</p>
            </div>
        </div>
      </div>
      <div style={{backgroundColor: "#f9f9f9"}}>
      <div className={styles.left}>
        <p>Websites available for assessment:</p>
      </div>
      </div>
      <main className={styles.main}>
        <DataGridDemo />
      </main>
    </>
  );
}

export default Home;
