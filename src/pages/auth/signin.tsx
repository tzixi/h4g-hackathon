import { NextPage } from "next";


interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
    return (
    <div className="sign-in-form">
        <form>
            <h1>User Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Assessor Login" />
            <input type="submit" value="Coprporate Login" />
        </form>
    </div>
    );
};

export default SignIn;