import { Fab } from "@mui/material";
import TagField from "components/TagField/TagField";
import styles from "./TagBox.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
          <h3>Positive</h3>
          <TagField tags={PTags[props.stage]} isPositive />
        </div>
        <div className={styles.negative}>
          <h3>Negative</h3>
          <TagField tags={NTags[props.stage]} isPositive={false} />
        </div>
      </div>
      <div className={styles.combinedtray}></div>
      <div className={styles.remarkbox}>
        <h3>Remarks</h3>
      </div>
    </div>
  );
};

export default TagBox;
