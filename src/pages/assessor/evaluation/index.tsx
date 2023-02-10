import { Stack } from "@mui/system";
import UserBar from "components/UserBar/UserBar";
import Head from "next/head";
import Image from "next/image";
import cx from "classnames";
import styles from "./evaluation.module.css";
import Fab from "@mui/material/Fab";
import TagBox from "components/TagBox/TagBox";
import { useState } from "react";
function assessorEvaluation() {
  const [currStage, setStage] = useState(0);
  const [stageArr, setStageArr] = useState([[], [], [], []] as string[][]);

  const handleResult = (result: string[]) => {
    setStageArr((prev) => {
      const newArr = [...prev];
      newArr[currStage] = result;
      return newArr;
    });
  };
  const handleForward = () => {
    setStage(currStage + 1);
    console.log(stageArr);
  };

  const handleBack = () => {
    setStage(currStage - 1);
    console.log(stageArr);
  };
  return (
    <div style={{ width: "100%", padding: "10px" }}>
      <Head>
        <title>Assessor Evaluation Page</title>
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

      <div className={cx(styles["evaluation-form"])}>
        <UserBar isAssessor />
        <div className={styles.maincontent}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              alignItems: "center",
              margin: "0px 20px",
            }}
          >
            <h3>ASSESSMENT INFORMATION:</h3>
            <textarea style={{ height: "400px", width: "100%" }}></textarea>
            <Fab
              sx={{
                backgroundColor: "#17475f",
                margin: "10px 20px",
                width: "300px",
                height: "50px",
                color: "white",
                fontSize: "14px",
                fontWeight: "bold",
              }}
              aria-label="visit-website"
              variant="extended"
              onClick={() => {
                console.log("go to website!!!");
              }}
            >
              VISIT WEBSITE
            </Fab>
          </div>
          <TagBox
            resultArr={stageArr}
            setResult={handleResult}
            back={handleBack}
            forward={handleForward}
            stage={currStage}
          />
        </div>
      </div>
    </div>
  );
}

export default assessorEvaluation;
