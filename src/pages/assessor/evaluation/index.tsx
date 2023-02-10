import { Stack } from "@mui/system";
import UserBar from "components/UserBar/UserBar";
import Head from "next/head";
import Image from "next/image";
import cx from "classnames";
import styles from "./evaluation.module.css";
import {  Container, TextField, Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function assessorEvaluation() {
    return (
        <div style={{ width: "100%" }}>
            <Head>
                <title>
                    Assessor Evaluation Page
                </title>
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
                
                <Container>
                    <Stack direction="row" alignItems="center" spacing={5}
                    >
                        <Stack direction="column">
                            <label style={{fontSize: "14px", fontWeight: "bold"}}>ASSESSMENT INFORMATION:</label>
                            <textarea style={{height: "400px", width: "600px", mar: "2%"}}></textarea>

                            <Fab
                                sx={{
                                    backgroundColor: "#2C80A6", 
                                    margin: "0 20px",
                                    width: "300px", 
                                    height: "50px",
                                    color: "black",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                }}
                                aria-label="visit-website"
                                variant="extended"
                                onClick={() => {
                                    console.log("go to website!!!")
                                }}
                            >
                                VISIT WEBSITE
                            </Fab>
                        </Stack>

                        <Stack direction="column" alignItems="top" spacing={2}>
                            <Box justifyContent="center" width="450px" height="100px" paddingBottom={5} sx={{backgroundColor: "#17475F", borderRadius: "15px", padding: "2%"}}>
                                <h2>2/4 NAVIGATION TEST:</h2>
                                <p>Buttons/Menu: How hard is it tso navigate to other pages or the homepage?</p>
                            </Box>

                            <Box width="450px" height="100px" paddingBottom={3} sx={{backgroundColor: "#D9D9D9", borderRadius: "15px"}}></Box>
                            
                            <label>Additional remarks (optional)</label>
                            <Box width="450px" height="100px" paddingBottom={3} sx={{backgroundColor: "#D9D9D9", borderRadius: "15px"}}></Box>
                            <Fab
                                sx={{
                                    width: "90px",
                                    height: "50px",
                                    fontSize: "15px",
                                    alignItems: "center"
                                }}
                                aria-label="next-page"
                                variant="extended"
                                onClick={() => {
                                    console.log("Next button clicked!!!")
                                }}
                                >
                                Next
                                <ArrowForwardIosIcon />
                            </Fab>
                        </Stack>
                    </Stack>
                </Container>
            </div>
        </div>
    );
}

export default assessorEvaluation;