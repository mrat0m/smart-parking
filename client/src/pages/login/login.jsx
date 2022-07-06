// import bg from './assets/bg.jpg';
import { Button, TextField } from '@mui/material';
import { Link } from "react-router-dom";
import styled from 'styled-components';


const InputWrapper = styled.div`
    /* color:#333; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    /* background-color: pink; */
    border-radius: 1rem;
    box-shadow: #354a5389 0px 5px 0px, #354a5389 0px 8px 24px, #354a53 0px 16px 48px;
`;
const InputRowWapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
`;
const LinkButton = styled(Link)`
    color: #3178cf;
    text-decoration: none;
`;

const Login = () => {

    return (
        <InputWrapper>
            <h2>Login</h2>
            <TextField
                name="email"
                label="User ID"
                autoFocus
                variant="outlined"
                // color="warning"
                required
                size="small"
                type="text"
                sx={{
                    color: '#474747',
                    mb: 2,
                    "& .MuiInputLabel-root": { color: 'grey' },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                            borderColor: "#474747"
                        }
                    }
                }}
                InputLabelProps={{
                    style: { color: '#474747' },
                }}
            />
            <TextField
                // name="password"
                label="Password"
                // autoFocus
                // variant="outlined"
                // color="warning"
                required="Please Enter Password"
                size="small"
                type="password"
                sx={{
                    color: '#474747',
                    mb: 2,
                    "& .MuiInputLabel-root": { color: 'grey' },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                            borderColor: "#474747"
                        }
                    }
                }}
                InputLabelProps={{
                    style: { color: '#474747' },
                }}
            // {...register("email", {
            //     required: "Please Enter E-mail ID"
            // })}
            />
            <Button
                name="login"
                sx={{
                    color: '#474747',
                    mb: 2,
                    // ml: 2,
                    backgroundColor: '#fff',
                    borderColor: '#474747',
                    borderRadius: 5,
                    ':hover': {
                        bgcolor: '#474747', // theme.palette.primary.main
                        color: 'white',
                        borderColor: '#474747',
                    },
                }}
                variant="outlined"
                size="large"
            >Login</Button>
            <InputRowWapper>
                <h4>
                    <LinkButton to="/forgotpassword">Forgotten Password?</LinkButton>
                </h4>
                {/* &emsp; */}
                <h4>&nbsp;|&nbsp;</h4>
                <h4>
                    <LinkButton to="/register">Create new account !</LinkButton>
                </h4>
            </InputRowWapper>
            {/* </form> */}
        </InputWrapper>
        // </div>

    );
}

export default Login;