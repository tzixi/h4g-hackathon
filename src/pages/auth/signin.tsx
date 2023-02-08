import { NextPage } from "next";
import Head from "next/head";
import Stack from "@mui/material/Stack";
import Fab from '@mui/material/Fab';
import { Container } from "@mui/material";
import styles from '../../styles/Signin.module.css'
import cx from 'classnames';
import { ST } from "next/dist/shared/lib/utils";

interface Props {}


const SignIn: NextPage = (props): JSX.Element => {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <Container>
                <div className={cx(styles["sign-in-form"])}>
                    <form>
                        <h1>User Login</h1>
                        {/* <Stack direction="row" spacing={2} marginBottom={2}>
                            <label>Username:</label>
                            <input type="text" placeholder="Username" />
                        </Stack>

                        <Stack direction="row" spacing={2} marginBottom={5}>
                            <label>Password:</label>
                            <input type="password" placeholder="Password" />
                        </Stack> */}

                        <Stack direction="row" spacing={2} marginBottom={5} textAlign="center">
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
                            <Fab aria-label="assessor-login" variant="extended" color="primary" size="medium">Assessor Login</Fab> 
                            <Fab aria-label="corporate-login" variant="extended" color="secondary" size="medium">Coporate Login</Fab>
                        </Stack>
                    </form>
                </div>
            </Container>
        </>
    );
};

export default SignIn;