import { Fab } from "@mui/material";
import styles from "./UserBar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const UserBar = (props: { isAssessor: boolean }) => {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/");
  };

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
        <Fab variant="extended" onClick={handleLogout}>
          LOG OUT
        </Fab>
      </div>
    </div>
  );
};

export default UserBar;
