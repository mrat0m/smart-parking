import { TextField, Button } from "@mui/material";
import styled from "styled-components";
import * as React from 'react'; //react used for select
import MenuItem from '@mui/material/MenuItem'; //selct tag

const Parkinglots = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  
const HomeContent = styled.div`
`;
const InputWrapper = styled.div`
    /* color:#333; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: -220px;
    background-color: pink; */
    margin-left: -210px; 
    width: 1040px;
    border-radius: 1rem;
    box-shadow: #354a5389 0px 5px 0px, #354a5389 0px 8px 24px, #354a53 0px 16px 48px;
`;
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


const AddParkingSlot = () => {
    const [Parkinglot, setParkinglot] = React.useState('Select');

  const handleChange = (event) => {
    setParkinglot(event.target.value);
  };
    return (  
        <InputWrapper>
                <h1>Parking Slot</h1>
                    <TextField
                        label="Parkinglot Name"
                        required="Please Enter Name for Parkinglot"
                        size="small"
                        select
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
                        label="Parking Slot No."
                        required="Please Enter Parking Slot No."
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
                        label="Rate"
                        required="Please Enter slot rate"
                        size="small"
                        type="number"
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
                        InputProps={{ inputProps: { min: 0.00 } }}
                        InputLabelProps={{
                            style: { color: '#474747' },
                        }}
                    />
                    <TextField
                        label="Slot Type"
                        required="Please Enter type of Parking Slot"
                        size="small"
                        select
                        // type="select"
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
                    >ADD Parking Slot</Button>

                    {/* Test select */}
                    <TextField
          id="filled-select-currency"
          select
          label="Select"
          value={Parkinglot}
          onChange={handleChange}
          helperText="Please select your currency"
          variant="filled"
        >
          {Parkinglots.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency-native"
          select
          label="Native select"
          value={Parkinglot}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="filled"
        >
          {Parkinglots.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        {/* End Test Select */}
                </InputWrapper>
    );
}
 
export default AddParkingSlot;
