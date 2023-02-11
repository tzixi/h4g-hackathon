import { Stack } from "@mui/system";
import UserBar from "components/UserBar/UserBar";
import Head from "next/head";
import Image from "next/image";
import cx from "classnames";
import styles from "./evaluation.module.css";
import Fab from "@mui/material/Fab";
import TagBox from "components/TagBox/TagBox";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Alert, AlertTitle, Button, Dialog, DialogTitle } from "@mui/material";
function assessorEvaluation() {
  const [currStage, setStage] = useState(0);
  const [stageArr, setStageArr] = useState([[], [], [], []] as string[][]);
  const [remarks, setRemarks] = useState(["", "", "", ""]);
  const [companyName, setCompanyName] = useState("");
  const [assessInfo, setAssessInfo] = useState("");
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleGetData = async () => {
    const { evaluation_id } = router.query;
    console.log(evaluation_id);
    await axios
      .get(`http://localhost:8080/api/assessment/${evaluation_id}`)
      .then(function (response) {
        const result = response.data;
        setCompanyName(result.companyName);
        setAssessInfo(result.assessInfo);
        setUrl(result.url);
        console.log(companyName);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    handleGetData();
  }, []);

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
  const handleRemarks = (remark: string) => {
    console.log(remarks);
    setRemarks((prev) => {
      const newArr = [...prev];
      newArr[currStage] = remark;
      return newArr;
    });
  };

  const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      const response = await axios.post(
        "https://asia-southeast1-starlit-array-328711.cloudfunctions.net/hack4good/api/assessment/result/add",
        {
          url: url,
          disability: "Dyslexia and Epilepsy",
          evalTags: JSON.stringify(stageArr),
          evalRemarks: JSON.stringify(remarks),
        },
        config
      );
      setOpen(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div style={{ width: "100%", padding: "10px" }}>
      <Dialog
        onClose={() => {
          setOpen(false);
        }}
        open={open}
      >
        <DialogTitle>
          Submitted Successfully! Thank you for your assessment!
        </DialogTitle>
        <Button
          variant="outlined"
          onClick={() => {
            setOpen(false);
            router.back();
          }}
        >
          Return to Dashboard
        </Button>
      </Dialog>
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
        <UserBar isAssessor assessMode url={url} companyName={companyName} />
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
            <textarea
              readOnly
              style={{ height: "400px", width: "100%" }}
              defaultValue={assessInfo}
            />
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
                window.open(url, "_blank");
              }}
            >
              VISIT WEBSITE
            </Fab>
          </div>
          <TagBox
            key={currStage}
            resultArr={stageArr}
            setResult={handleResult}
            back={handleBack}
            forward={handleForward}
            stage={currStage}
            remarks={handleRemarks}
            submit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default assessorEvaluation;
