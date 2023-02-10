import { NextPage } from "next";
import Head from "next/head";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import { Container } from "@mui/material";
import styles from "../styles/Signin.module.css";
import cx from "classnames";
import Image from "next/image";
import logo from "../../public/inclusion_lab_photo.png";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";

interface Props {}

const Home: NextPage = (props): JSX.Element => {
  const Router = useRouter();

  const fetchThing = async () => {
    const response = await fetch(
      "https://asia-southeast1-starlit-array-328711.cloudfunctions.net/hack4good/api/assessments/twilio",
      { mode: "cors" }
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchThing();
  }, []);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Container>
        <div>
          <Stack direction="row" alignItems="center">
            <div
              style={{ borderTop: "10px solid #17475F", width: 321, height: 0 }}
            ></div>
            <Image
              src={logo}
              alt="Inclusion Lab Logo"
              height={192}
              width={811}
            />
            <div
              style={{ borderTop: "10px solid #17475F", width: 321, height: 0 }}
            ></div>
          </Stack>

          <div className={cx(styles["sign-in-form"])}>
            <form>
              <h1>User Login</h1>

              <Stack
                direction="row"
                spacing={2}
                marginBottom={5}
                textAlign="center"
              >
                <Stack direction="column" spacing={5} paddingTop={1}>
                  <label>Username:</label>
                  <label>Password:</label>
                </Stack>

                <Stack direction="column" spacing={2}>
                  <input type="text" placeholder="Username" />
                  <input type="password" placeholder="Password" />
                </Stack>
              </Stack>

              <Stack direction="row" spacing={4} justifyContent="center">
                <Fab
                  aria-label="assessor-login"
                  variant="extended"
                  onClick={() => {
                    Router.push("/assessor");
                  }}
                >
                  Assessor Login
                </Fab>
                <Fab
                  aria-label="corporate-login"
                  variant="extended"
                  onClick={() => {
                    Router.push("/corporate");
                  }}
                >
                  Corporate Login
                </Fab>
              </Stack>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
