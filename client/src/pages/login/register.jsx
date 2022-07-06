// import bg from './assets/bg.jpg';
import { Button, TextField } from '@mui/material';
import styled from 'styled-components';
import { Link } from "react-router-dom";
// import DatePicker from '@mui/x-date-pickers-pro/DatePicker';

const InputWrapper = styled.div`
    /* color:#333; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: 100px; */
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
// const LinkButton = styled.h4`
//     color: #3178cf;
// `;


const Register = () => {
    return (
        <InputWrapper>
            <h2>Register Customer</h2>
            <InputRowWapper>
                <TextField
                    label="First Name"
                    autoFocus
                    variant="outlined"
                    required
                    size="small"
                    type="text"
                    sx={{
                        color: '#474747',
                        ml: 2,
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
                    label="Middle Name"
                    autoFocus
                    variant="outlined"
                    size="small"
                    type="text"
                    sx={{
                        color: '#474747',
                        mb: 2,
                        ml: 2,
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
                    label="Last Name"
                    autoFocus
                    variant="outlined"
                    required
                    size="small"
                    type="text"
                    sx={{
                        color: '#474747',
                        mb: 2,
                        ml: 2,
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
            </InputRowWapper>
            <InputRowWapper>
                <TextField
                    label="e-mail"
                    autoFocus
                    variant="outlined"
                    required
                    size="small"
                    type="text"
                    sx={{
                        color: '#474747',
                        mb: 2,
                        ml: 2,
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
                    label="Mobile No."
                    autoFocus
                    variant="outlined"
                    required
                    size="small"
                    type="text"
                    sx={{
                        color: '#474747',
                        mb: 2,
                        ml: 2,
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
                    label="Date of Birth"
                    autoFocus
                    variant="outlined"
                    required
                    size="small"
                    type="date"
                    sx={{
                        color: '#474747',
                        width: 220,
                        mb: 2,
                        ml: 2,
                        "& .MuiInputLabel-root": { color: 'grey' },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                                borderColor: "#474747"
                            }
                        }
                    }}
                    InputLabelProps={{
                        style: { color: '#474747' },
                        shrink: true
                    }}
                />
            </InputRowWapper>
            <InputRowWapper>
                <TextField
                    label="House Name"
                    autoFocus
                    variant="outlined"
                    required
                    size="small"
                    type="text"
                    sx={{
                        color: '#474747',
                        mb: 2,
                        ml: 2,
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
                    label="City"
                    autoFocus
                    variant="outlined"
                    required
                    size="small"
                    type="text"
                    sx={{
                        color: '#474747',
                        mb: 2,
                        ml: 2,
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
                    label="State"
                    autoFocus
                    variant="outlined"
                    required
                    size="small"
                    type="text"
                    sx={{
                        color: '#474747',
                        mb: 2,
                        ml: 2,
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
            </InputRowWapper>
            <InputRowWapper>
                <TextField
                    label="Pincode"
                    autoFocus
                    variant="outlined"
                    required
                    size="small"
                    type="text"
                    sx={{
                        color: '#474747',
                        mb: 2,
                        ml: 2,
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
                    label="Password"
                    autoFocus
                    variant="outlined"
                    required
                    size="small"
                    type="password"
                    sx={{
                        color: '#474747',
                        mb: 2,
                        ml: 2,
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
                    label="Confirm Password"
                    autoFocus
                    variant="outlined"
                    required
                    size="small"
                    type="password"
                    sx={{
                        color: '#474747',
                        mb: 2,
                        ml: 2,
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
            </InputRowWapper>
            <Button
                name="register"
                sx={{
                    color: '#474747',
                    mb: 2,
                    backgroundColor: '#fff',
                    border: 2,
                    borderColor: '#474747',
                    borderRadius: 5,
                    ':hover': {
                        bgcolor: '#474747', // theme.palette.primary.main
                        color: 'white',
                        border: 2,
                        borderColor: '#474747',
                    }
                }}
                variant="outlined"
                size="large"
            >Register</Button>
            {/* <Link to="/login" style={{ textDecoration: 'none' }}>
                <LinkButton>Already have an account?</LinkButton>
            </Link> */}
            <h4>
                <LinkButton to="/login">Already have an account?</LinkButton>
            </h4>
        </InputWrapper>

    );
}

export default Register;