import { Fab, TextField } from "@mui/material";
import TagField from "components/TagField/TagField";
import styles from "./TagBox.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { use, useEffect, useState } from "react";

const BannerText = [
  "1/4 VISUAL TEST",
  "2/4 USABILITY TEST",
  "3/4 CONTENT/MEDIA TEST",
  "4/4 FUNCTIONALITY/RESPONSIVE TEST",
];

const BannerDesc = [
  "Information and user interface components must be presentable to users in ways they can perceive.",
  "User interface components and navigation must be operable.",
  "Information and the operation of user interface must be understandable.",
  "Maximize compatibility with current and future user agents, including assistive technologies.",
];

const PTags = [
  [
    "Meaningful Buttons",
    "Good Color Contrast",
    "Good Text Size",
    "Good Font",
    "Clear UI",
    "Multi-media Support",
    "Adjustable Font",
  ],
  [
    "Accessible Keyboard",
    "No Interruptions",
    "No Rapid Flashes",
    "Labelled Pages",
    "QuickLinks Access",
    "Clear Navigation",
    "Clear Headers/Section",
  ],
  [
    "Clear",
    "Unambiguous Words",
    "Defined Abbrievations",
    "Simple Language",
    "Illustrated",
    "Text-To-Speech",
    "Help Labels",
    "Input Error Detection",
  ],
  [
    "Clear Naming",
    "Reponsive Design",
    "Easy Navigation",
    "Magnify Tool",
    "Structured Design",
    "Clear Text/Button Labels",
  ],
];
const NTags = [
  [
    "Buttons without labels",
    "Uncaptioned Media",
    "Bad Color Contrast",
    "Bad Font",
    "Small Font",
    "Wordy",
    "Cluttered UI",
  ],
  [
    "No Accessible Keyboard",
    "Presence of timer",
    "Interruptions/Popups",
    "Rapid Flashes",
    "No Page Titles",
    "No UI Labels",
    "No Weblink Labels",
  ],
  [
    "Advanced Language",
    "Ambiguous Words",
    "No Text-To-Speech",
    "Misleading Labels",
    "Too Wordy",
    "Hard To Navigate",
    "No Help Links",
  ],
  [
    "Unresponsive Design",
    "No Magnify Tool",
    "Bad Site Structure",
    "Unclear Buttons/Labels",
    "Missing/Buggy Features",
    "Inaccessible",
  ],
];

const TagBox = (props: {
  setResult: any;
  resultArr: string[][];
  stage: number;
  forward: any;
  back: any;
  remarks: any;
  submit: any;
}) => {
  const [selectedTags, setSelectedTags] = useState([] as string[]);
  const [currStage, setStage] = useState(props.stage);
  const [NTagsArr, setNTags] = useState([] as string[]);
  const [PTagsArr, setPTags] = useState([] as string[]);
  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    if (
      props.resultArr.length > currStage &&
      props.resultArr[currStage].length !== 0
    ) {
      setSelectedTags(props.resultArr[currStage]);
    }
  }, []);

  useEffect(() => {
    setSelectedTags(() => [...PTagsArr, ...NTagsArr]);
  }, [PTagsArr, NTagsArr]);

  useEffect(() => {
    props.setResult(selectedTags);
    props.resultArr[currStage] = selectedTags;
  }, [selectedTags]);

  useEffect(() => {
    let emptyArr = [] as string[];
    setSelectedTags(emptyArr);
  }, [currStage]);
  useEffect(() => {
    props.remarks(remarks);
  }, [remarks]);
  const handlePTagChange = (tags: string[]) => {
    setPTags(tags);
  };
  const handleNTagChange = (tags: string[]) => {
    setNTags(tags);
  };

  const handleForward = () => {
    setStage(currStage + 1);
    props.forward();
  };

  const handleBack = () => {
    setStage(currStage - 1);
    props.back();
  };

  return (
    <div className={styles.main}>
      <div className={styles.banner}>
        {/* {currStage === 0 ? (
          ""
        ) : (
          <Fab
            sx={{ alignContent: "center" }}
            variant="extended"
            onClick={handleBack}
          >
            <ArrowBackIosIcon />
            BACK
          </Fab>
        )} */}
        <div style={{ margin: "0px 20px" }}>
          <h2>{BannerText[currStage] + ":"}</h2>
          <p>{BannerDesc[currStage]}</p>
        </div>
        {currStage === 3 ? (
          <Fab
            sx={{ alignContent: "center", padding: "0px 10px", width: "200px" }}
            variant="extended"
            onClick={props.submit}
          >
            SUBMIT
            <ArrowForwardIosIcon />
          </Fab>
        ) : (
          <Fab
            sx={{ alignContent: "center", width: "200px" }}
            variant="extended"
            onClick={handleForward}
          >
            NEXT
            <ArrowForwardIosIcon />
          </Fab>
        )}
      </div>
      <div className={styles.tagtray}>
        <div className={styles.positive}>
          <h2>Positive</h2>
          <TagField
            onChange={handlePTagChange}
            defaultTags={PTags[currStage]}
            isPositive
          />
        </div>
        <div className={styles.negative}>
          <h2>Negative</h2>
          <TagField
            onChange={handleNTagChange}
            defaultTags={NTags[currStage]}
            isPositive={false}
          />
        </div>
      </div>
      {props.resultArr.length > currStage &&
      props.resultArr[currStage].length !== 0 ? (
        <h3>
          You have selected:
          {" " + props.resultArr[currStage].join(", ")}
        </h3>
      ) : (
        ""
      )}
      <hr
        style={{
          width: "100%",
          height: "10px",
          backgroundColor: "#17475F",
          margin: "15px 0px",
        }}
      ></hr>
      <div className={styles.combinedtray}></div>
      <div className={styles.remarkbox}>
        <h2 style={{ color: "black" }}>Additional Remarks:</h2>
        <TextField
          placeholder="Enter Remarks here"
          onChange={(e) => {
            setRemarks(e.target.value);
          }}
          sx={{ width: "100%" }}
          multiline
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default TagBox;
