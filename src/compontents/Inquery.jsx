import React,{useState} from 'react';
import {Box ,TextField,IconButton,Table , TableHead, TableBody,TableRow,TableCell,Checkbox ,Button,Typography,FormControlLabel} from'@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DateRangePicker from '@mui/lab/DateRangePicker';
import rows from './rows'
import {useSelector} from 'react-redux'
const Inquery = () => {
    const {language} = useSelector((state)=>({language:state.languageReducer.lang}))
    const [open,setOpen] = useState(false);
    const [value, setValue] = useState([null, null]);
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <Box sx={{position:'relative',display:'flex',flexDirection:'column',justifyContent:'space-between' ,minHeight:'calc(100vh - 50px)', width: '100%'}}>
            <Box sx={{minWidth:'300px',position:'relative',width:'60%',mx:'auto',paddingTop:3,display:'flex',justifyContent:'center',alignItems:'center',gap:2}}  >
                <TextField sx={{width:'100%'}}/>
                <IconButton  sx={{position:'relative',height:'30px',width:'30px'}}  onClick={()=> setOpen(!open)}>
                    <FilterAltIcon/>
                </IconButton>
                <Box sx={{position:'absolute',backgroundColor:'white',mx:'auto',top:'80px',padding:2,minHeight:'450px',width:'100%', border:1,borderColor:'rgba(0,0,0,0.2)',display:`${open ? 'block' : 'none'}`}} >
                    <form className="inqueryForm" onSubmit={handleSubmit}>    
                        <Box sx={{position:'relative' , display:'flex' ,width:'100%',justifyContent:'center',gap:2}}>
                            <Box sx={{border:1, borderRadius:'5px',borderColor:'rgba(0,0,0,0.4)' ,padding:2}}>
                                <Typography sx={{mb:1 }} >
                                    {language === 'en' ? 'Delivary Date' : 'موعد التسليم'}
                                </Typography>
                                <DateRangePicker
                                        sx={{width:'50%'}}
                                        value={value}
                                        onChange={(newValue) => {
                                        setValue(newValue);
                                        }}
                                        renderInput={(startProps, endProps) => (
                                        <React.Fragment>
                                            <TextField {...startProps} size="small"  />
                                            <Box sx={{ mx: 1 }}> to </Box>
                                            <TextField {...endProps}  size="small" />
                                        </React.Fragment>
                                        )}
                                    />
                            </Box>
                            <Box sx={{border:1, borderRadius:'5px',borderColor:'rgba(0,0,0,0.4)' ,padding:2}}>
                                <Typography sx={{mb:1 }} >
                                    {language === 'en' ? 'Recieve at branch' : 'استلام في الفرع'}
                                </Typography>
                                <DateRangePicker
                                        sx={{width:'50%'}}
                                        value={value}
                                        onChange={(newValue) => {
                                        setValue(newValue);
                                        }}
                                        renderInput={(startProps, endProps) => (
                                        <React.Fragment>
                                            <TextField {...startProps} size="small"  />
                                            <Box sx={{ mx: 1 }}> to </Box>
                                            <TextField {...endProps}  size="small" />
                                        </React.Fragment>
                                        )}
                                    />
                            </Box>
                            <Box sx={{border:1, borderRadius:'5px',borderColor:'rgba(0,0,0,0.4)' ,padding:2}}>
                                <Typography sx={{mb:1 }} >
                                    {language === 'en' ? 'Receiving date':'موعد الاستلام'}
                                </Typography>
                                    <DateRangePicker
                                            sx={{width:'50%'}}
                                            value={value}
                                            onChange={(newValue) => {
                                            setValue(newValue);
                                            }}
                                            renderInput={(startProps, endProps) => (
                                            <React.Fragment>
                                                <TextField {...startProps} size="small"  />
                                                <Box sx={{ mx: 1 }}> to </Box>
                                                <TextField {...endProps}  size="small" />
                                            </React.Fragment>
                                            )}
                                        />
                            </Box>

                        </Box>
                        <Box sx={{position:'relative' , display:'flex' ,width:'100%',justifyContent:'center',gap:2}}>
                        <TextField size="small" label={language === 'en' ? 'consignee' :'المرسل اليه'}>
                                
                        </TextField>
                        <TextField size="small" label={language === 'en' ? 'Phone' :'التليفون'}>
                                
                        </TextField>
                        <TextField size="small" label={language === 'en' ? 'Address' :'العنوان'}>
                                
                        </TextField>
                        <TextField size="small" label={language === 'en' ? 'Refrence Number' :'رقم مرجعي'}>
                                
                        </TextField>
                        <TextField size="small" label={language === 'en' ? 'Operation Number' :'رقم العملية'}>
                                
                        </TextField>
                        </Box>
                        <Box sx={{position:'relative' , display:'flex' ,width:'100%',justifyContent:'space-between',padding:3,alignItems:'center', gap:2}}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label={language==='en' ? 'Paid':'تم الدفع'} />
                        <FormControlLabel control={<Checkbox  />} label={language==='en' ? 'Current Branch':'الفرع الحالي'} />
                        <FormControlLabel control={<Checkbox  />} label={language==='en' ? 'Collection Done':'تم التحصيل'} />
                        <FormControlLabel control={<Checkbox defaultChecked />} label={language==='en' ? 'Package for package':'طرد x طرد'} />
                        </Box>
                        <Button type="submit" variant="contained">
                            Search
                        </Button>
                    </form>
                    
                </Box>
            </Box >

            <Box sx={{display:'flex' , flexDirection:'column',justifyContent:'center' ,alignItems:'center'}}>
                <Table size="small">
                    <TableHead>
                    <TableRow>
                        <TableCell>{language === 'en' ? 'Date' :'التاريخ'}</TableCell>
                        <TableCell>{language === 'en' ? 'Name' :'الاسم'}</TableCell>
                        <TableCell>{language === 'en' ? 'Ship To' :'الوجهة'}</TableCell>
                        <TableCell>{language === 'en' ? 'Payment Method' : 'طريقة الدفع'}</TableCell>
                        <TableCell align="right">{language === 'en' ? 'Sale Amount':'نسبة الخصم'}</TableCell>
                        <TableCell align="right">{language === 'en' ? 'Address':'العنوان'}</TableCell>
                        <TableCell align="right">{language === 'en' ? 'Consignee':'المرسل اليه'}</TableCell>
                        <TableCell align="right">{language === 'en' ? 'Phone':'تليفون'}</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.shipTo}</TableCell>
                            <TableCell>{row.paymentMethod}</TableCell>
                            <TableCell align="right">{`$${row.amount}`}</TableCell>
                            <TableCell  align="right">{row.address}</TableCell>
                            <TableCell  align="right">{row.consignee}</TableCell>
                            <TableCell  align="right">{row.phone1}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </Box>
        </Box>
    );
}

export default Inquery;
