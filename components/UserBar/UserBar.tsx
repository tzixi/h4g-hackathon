import { Fab } from "@mui/material";
import styles from "./UserBar.module.css";
import Image from "next/image";

const UserBar = (props: { isAssessor: boolean }) => {
  return (
    <div className={styles.description}>
      <div>
        <p style={{ fontSize: "20px", fontWeight: "700" }}>
          {props.isAssessor
            ? "ASSESSOR DASHBOARD - TAN AH GOW"
            : "CORPORATE DASHBOARD - TAN AH GOW"}
        </p>
      </div>
      <div className={styles.user}>
        <Image src="/user.png" alt="profile" width="50" height="50" />
        <Fab sx={{ margin: "0 20px" }} variant="extended">
          MY PROFILE
        </Fab>
        <Fab variant="extended">LOG OUT</Fab>
      </div>
    </div>
  );
};

export default UserBar;
