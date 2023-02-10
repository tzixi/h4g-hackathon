import { Fab } from "@mui/material";
import styles from "./UserBar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const UserBar = (props: { isAssessor: boolean }) => {
  const router = useRouter();
  const { asPath } = useRouter();
  const handleLogout = () => {
    router.push("/");
  };
  const handleBack = () => {
    console.log(asPath);
    router.back();
  };
  return (
    <div className={styles.description}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {asPath !== "/corporate" && asPath !== "/assessor" ? (
          <div style={{ cursor: "pointer" }} onClick={handleBack}>
            <ArrowBackIosIcon fontSize="large" />
          </div>
        ) : (
          <div></div>
        )}
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
