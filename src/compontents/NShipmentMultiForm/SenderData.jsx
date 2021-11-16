import React from 'react';
import { useSelector } from 'react-redux';
import {Box,InputLabel,MenuItem,Select,FormControl} from '@mui/material';
import TextField from '@mui/material/TextField';


const Senderdata = (props) => {
    const {language} = useSelector((state)=>({language: state.languageReducer.lang}));
    const {handleState,data} = props
    const handleChange = (e)=>{
        handleState((prevState)=>({...prevState,sender:{...prevState.sender,[e.target.name]:e.target.value}}) )
    }
    return (
        <>
            <Box sx={{display:'flex' ,width:'100%',gap:2}} >
                <TextField  sx={{display:'flex' ,width:'50%'}} onChange={handleChange} value={data.sender.primaryAccount} name="primaryAccount" label={language=== 'en' ? 'Primary Account': 'حساب رئيسي'}  variant="outlined" />
                <TextField  sx={{display:'flex' ,width:'50%'}} onChange={handleChange} value={data.sender.secondaryAccount} name="secondaryAccount" label={language=== 'en' ? 'Secondary Account': 'حساب فرعي'} variant="outlined" />
            </Box>
            <Box sx={{display:'flex' ,width:'100%',gap:2}} >
                <TextField  sx={{display:'flex' ,width:'50%'}} onChange={handleChange} value={data.sender.address1} name="address1"  label={language=== 'en' ? 'Address 1': 'عنوان 1'}  variant="outlined" />
                <TextField  sx={{display:'flex' ,width:'50%'}} onChange={handleChange} value={data.sender.address2} name="address2" label={language=== 'en' ? 'Address 2': 'عنوان 2'} variant="outlined" />
            </Box>
            <Box sx={{display:'flex' ,width:'100%',gap:2}} >
                <TextField  sx={{display:'flex' ,width:'50%'}} onChange={handleChange} value={data.sender.contact} name="contact" label={language=== 'en' ? 'Contact': 'اتصال ب'}  variant="outlined" />
                <TextField  sx={{display:'flex' ,width:'50%'}} onChange={handleChange} value={data.sender.phoneNumber} name="phoneNumber" label={language=== 'en' ? 'Phone Number': 'تليفون'} variant="outlined" />
            </Box>
            <FormControl>
                <InputLabel id="demo-simple-select-helper-label">{language === 'en' ? 'City':'المدينة'}</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="city"
                value={data.sender.city}
                label="Delivary Type"
                onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}> {language === 'en' ? 'Giza' :'الجيزة'}</MenuItem>
                    <MenuItem value={20}> {language === 'en' ? 'Aswan' :'أسوان'}</MenuItem>
                    <MenuItem value={30}> {language === 'en' ? 'Alexandria' :'ألاسكندرية'}</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}

export default Senderdata;
