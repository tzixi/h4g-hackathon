import { Fab, TextField } from "@mui/material";
import TagField from "components/TagField/TagField";
import styles from "./TagBox.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
    "Clear",
    "Bright",
    "Bold",
    "Crisp",
    "Eye-catching",
    "Attractive",
    "Colorful",
  ],
  [
    "Intuitive",
    "Efficient",
    "User-friendly",
    "Responsive",
    "Streamlined",
    "Consistent",
    "Accessible",
  ],
  [
    "Clear",
    "Simple",
    "Easy",
    "Understandable",
    "Plain",
    "Illustrated",
    "Straightforward",
  ],
  [
    "Compatible",
    "Durable",
    "Flexible",
    "Adaptable",
    "Reliable",
    "Resilient",
    "Accessible",
  ],
];
const NTags = [
  [
    "Dull",
    "Faded",
    "Blurred",
    "Dim",
    "Confusing",
    "Unattractive",
    "Poorly designed",
  ],
  [
    "Confusing",
    "Unresponsive",
    "Slow",
    "Clumsy",
    "Inconsistent",
    "Unintuitive",
    "Inaccessible",
  ],
  [
    "Complicated",
    "Confusing",
    "Vague",
    "Unclear",
    "Misleading",
    "Inconsistent",
    "Complex",
  ],
  [
    "Fragile",
    "Incompatible",
    "Limited",
    "Unreliable",
    "Ineffective",
    "Unadaptable",
    "Inaccessible",
  ],
];

const TagBox = (props: { stage: number }) => {
  const [selectedTags, setSelectedTags] = useState([] as string[]);
  const [NTagsArr, setNTags] = useState([] as string[]);
  const [PTagsArr, setPTags] = useState([] as string[]);
  useEffect(() => {
    setSelectedTags(() => [...PTagsArr, ...NTagsArr]);
  }, [PTagsArr, NTagsArr]);

  const handlePTagChange = (tags: string[]) => {
    setPTags(tags);
  };
  const handleNTagChange = (tags: string[]) => {
    setNTags(tags);
  };
  return (
    <div className={styles.main}>
      <div className={styles.banner}>
        <div>
          <h2>{BannerText[props.stage] + ":"}</h2>
          <p>{BannerDesc[props.stage]}</p>
        </div>
        <Fab sx={{ alignContent: "center" }} variant="extended">
          NEXT
          <ArrowForwardIosIcon />
        </Fab>
      </div>
      <div className={styles.tagtray}>
        <div className={styles.positive}>
          <h2>Positive</h2>
          <TagField
            onChange={handlePTagChange}
            defaultTags={PTags[props.stage]}
            isPositive
          />
        </div>
        <div className={styles.negative}>
          <h2>Negative</h2>
          <TagField
            onChange={handleNTagChange}
            defaultTags={NTags[props.stage]}
            isPositive={false}
          />
        </div>
      </div>
      {selectedTags.length !== 0 ? (
        <h3>
          You have selected:
          {" " + selectedTags.join(", ")}
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
        <h2>Additional Remarks:</h2>
        <TextField
          placeholder="Enter Remarks here"
          sx={{ width: "100%" }}
          multiline
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default TagBox;
