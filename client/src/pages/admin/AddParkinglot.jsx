import { TextField, Button } from "@mui/material";
import styled from "styled-components";


const HomeContent = styled.div`
`;
// const InputWrapper = styled.div`
//     /* color:#333; */
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     /* margin-top: -220px;
//     background-color: pink; */
//     margin-left: -210px; 
//     width: 1040px;
//     border-radius: 1rem;
//     box-shadow: #354a5389 0px 5px 0px, #354a5389 0px 8px 24px, #354a53 0px 16px 48px;
// `;
const InputRowWapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    width: 750px;
`;
const InputColWrapper = styled.div`
    display: flex;
    flex-direction: column;   
    margin-right : 300px;
    margin-left: -100px; 
`;


const AddParkinglot = () => {
    return (
        <HomeContent>
            <InputRowWapper>
                <InputColWrapper>
                    <h1>Parkinglot</h1>
                    <TextField
                        label="Parkinglot Name"
                        required="Please Enter Name for Parkinglot"
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
                        label="Max Car Slots"
                        required="Please Enter maxiumum car slots"
                        size="small"
                        type="number"
                        defaultValue="0"
                        minValue={0}
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
                        InputProps={{ inputProps: { min: 0 } }}
                        InputLabelProps={{
                            style: { color: '#474747' },
                        }}
                    />
                    <TextField
                        label="Max Bike Slots"
                        required="Please Enter maxiumum bike slots"
                        size="small"
                        type="number"
                        defaultValue="0"
                        minValue={0}
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
                        InputProps={{ inputProps: { min: 0 } }}
                        InputLabelProps={{
                            style: { color: '#474747' },
                        }}
                    />
                    <TextField
                        label="City"
                        required="Please Enter City where Parkinglot is located"
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
                    >ADD Parkinglot</Button>
                </InputColWrapper>
                
            </InputRowWapper>
        </HomeContent>
    );
}

export default AddParkinglot;