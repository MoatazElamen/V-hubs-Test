import React ,{useState}from 'react';
import { useSelector } from 'react-redux';
import {Box ,FormControl,InputLabel,MenuItem,Select} from '@mui/material';
import TextField from '@mui/material/TextField';
const Shipmentdetail = () => {
    const [operation,setOperation] =useState(0);

    const {language} = useSelector((state)=>({language: state.languageReducer.lang }))
    return (
        <>
            <Box sx={{display:'flex' ,width:'100%',gap:2}} >
                <TextField id="outlined-basic" sx={{display:'flex' ,width:'50%'}} label={language==='en' ? 'Contents' :'المحتويات'} variant="outlined" />
                <TextField id="outlined-basic" type="number" sx={{display:'flex' ,width:'50%'}} label={language==='en' ? 'N of pieces' :'عدد القطع'} variant="outlined" />

            </Box>
            <Box sx={{display:'flex' ,width:'100%',gap:2}} >
                <TextField id="outlined-basic" sx={{display:'flex' ,width:'50%'}} label={language==='en' ? 'Weight' :'الوزن'} variant="outlined" />
                <TextField id="outlined-basic" sx={{display:'flex' ,width:'50%'}} label={language==='en' ? 'Volumetric weight' :'الوزن الحجمي'} variant="outlined" />
            </Box>
            <Box sx={{display:'flex' ,width:'100%',gap:2}} >
                <TextField id="outlined-basic" sx={{display:'flex' ,width:'50%'}} label={language==='en' ? 'Total Price' :'تحصيل نقدي'} variant="outlined" />
                <FormControl  sx={{display:'flex' ,width:'50%'}}>
                    <InputLabel id="demo-simple-select-helper-label">{language === 'en' ? 'Delivary Type':'نوع العمليه'}</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={operation}
                    label="Delivary Type"
                    onChange={(e)=>setOperation(e.target.value)}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}> {language === 'en' ? 'Package for Package' :'طرد مقابل طرد'}</MenuItem>
                    <MenuItem value={20}>{language === 'en' ? 'partial delivery' :'تسليم جزئي'}</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{display:'flex' ,width:'100%',gap:2}} >
                <TextField
                sx={{display:'flex' ,width:'100%',gap:2}}
                id="outlined-multiline-static"
                label={language ==='en' ? 'Additional Information' :'تعليمات خاصة'}
                multiline
                rows={4}
                />
            </Box>   

        </>
    );
}

export default Shipmentdetail;
