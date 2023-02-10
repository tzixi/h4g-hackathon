import { useEffect, useState } from "react";
import type { Property } from "csstype";
import { Tooltip } from "@mui/material";

const tagInput = {
  backgroundColor: "transparent",
  flexGrow: 1,
  padding: "0.5em 0",
  border: "none",
  outline: "none",
  fontSize: "16px",
  width: "50px",
};

const tagContainer = {
  border: "2px solid #DDE2E5",
  flexWrap: "wrap" as Property.FlexWrap,
  padding: "0.5em",
  borderRadius: "3px",
  width: "100%",
  marginTop: "1em",
  display: "flex",
  alignItems: "center",
  gap: "5px",
};

interface Props {
  onChange: (tags: string[]) => void;
  defaultTags: string[];
  isPositive: boolean;
}

const TagField = ({ onChange, defaultTags, isPositive }: Props) => {
  const [tags, setTags] = useState(defaultTags);
  const [selectedTags, setSelectedTags] = useState([] as string[]);
  useEffect(() => {
    onChange(selectedTags);
  }, [selectedTags]);

  useEffect(() => {
    setTags(defaultTags);
  }, [defaultTags]);
  return (
    <div style={tagContainer}>
      {tags.map((tags, index) => (
        <div
          onClick={() => {
            if (!selectedTags.includes(tags)) {
              setSelectedTags(() => [...selectedTags, tags]);
            } else {
              setSelectedTags(selectedTags.filter((tag) => tag !== tags));
            }
            return;
          }}
          style={{
            backgroundColor: isPositive ? "#21A25C" : "#E23737",
            filter: selectedTags.includes(tags) ? "brightness(1.1)" : "",
            display: "inline-block",
            padding: "0.3em 0.5em",
            border: selectedTags.includes(tags)
              ? "5px solid #17475F"
              : "5px solid transparent",
            borderRadius: "20px",
            cursor: "pointer",
          }}
          key={index}
        >
          <span
            style={{ color: "white", fontWeight: "500", fontSize: 20 }}
            className="text"
          >
            {tags}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TagField;
