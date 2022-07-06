import styled from "styled-components";
import { Button, TextField } from '@mui/material';

const HomeContent = styled.div`
`;
const InputWrapper = styled.div`
    /* color:#333; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -220px;
    margin-left: 400px;
    width: 400px;
    /* background-color: pink; */
    border-radius: 1rem;
    box-shadow: #354a5389 0px 5px 0px, #354a5389 0px 8px 24px, #354a53 0px 16px 48px;
`;
const Greeting = styled.h1`
    color:black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 110px;
    margin-left: -200px;
    width: 400px;
`;

const AdminHome = () => {
    return (
        <HomeContent>
            <Greeting>
                <h2>Welcome Back!</h2>#admin
            </Greeting>
            <InputWrapper>
                <h2>ADMIN | Change Password</h2>
                <TextField
                    label="Current Password"
                    required="Please Enter Current Password"
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
                />
                <TextField
                    label="New Password"
                    required="Please Enter New Password"
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
                /><TextField
                    label="Confirm New Password"
                    required="Please Re-Enter New Password"
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
                />
                <Button
                    sx={{
                        color: '#ffffff',
                        mb: 2,
                        // ml: 2,
                        backgroundColor: '#32b3eb',
                        // borderColor: '#474747',
                        borderRadius: 4,
                        ':hover': {
                            bgcolor: '#03bb85', // theme.palette.primary.main
                            color: '#ffffff',
                        },
                    }}
                    variant="contained"
                    size="small"
                >Change Password</Button>
            </InputWrapper>
        </HomeContent>
    );
}

export default AdminHome;