import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import {Box,MenuItem,Select,FormControl,InputLabel,TextField} from '@mui/material';
const Consigneedata = () => {
    const {language} = useSelector((state)=>({language: state.languageReducer.lang }))
    const [city,setCity] = useState(``);

    return (
        <>
            <Box sx={{display:'flex' ,width:'100%',gap:2}} >
                <TextField  sx={{width:'50%'}}  label={language=== 'en' ? 'Name': 'ألاسم'}  variant="outlined" />
                <TextField  sx={{width:'50%'}} label={language=== 'en' ? 'Phone 1': 'تليفون 1'} variant="outlined" />
            </Box>
            <Box sx={{display:'flex' ,width:'100%',gap:2}} >
            <TextField  sx={{width:'50%'}} label={language=== 'en' ? 'Phone 2': 'تليفون 2'} variant="outlined" />
                <TextField  sx={{width:'50%'}} label={language=== 'en' ? 'Contact': 'اتصال ب'} variant="outlined" />
            </Box>
            <Box sx={{display:'flex' ,width:'100%',gap:2}} >
                <TextField  sx={{display:'flex' ,width:'50%'}}  label={language=== 'en' ? 'Address 1 ': 'عنوان 1'}  variant="outlined" />
                <TextField  sx={{display:'flex' ,width:'50%'}}  label={language=== 'en' ? 'Address 2 ': 'عنوان 2'}  variant="outlined" />
            </Box>
            <Box sx={{display:'flex' ,width:'100%',gap:2}} >
                <TextField  sx={{display:'flex' ,width:'50%'}}  label={language=== 'en' ? 'reference number': 'رقم مرجعي'}  variant="outlined" />
                <TextField  sx={{display:'flex' ,width:'50%'}} label={language=== 'en' ? 'Secondary Account': 'حساب فرعي'} variant="outlined" />
            </Box>
            <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">{language === 'en' ? 'City':'المدينة'}</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={city}
                    label="Delivary Type"
                    onChange={(e)=>setCity(e.target.value)}
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

export default Consigneedata;
