import React from 'react';
import classes from '../styles/shipment.module.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import {ConsigneeData,SenderData,ShipmentDetail} from './NShipmentMultiForm'

const Newshipment = () => {
    const {language}= useSelector((state)=>({language:state.languageReducer.lang}));
    const steps = language ==='en' ?  ['Sender Data', 'Consignee Data', 'Shipment Detail'] : ['بيانات الراسل', 'بيانات المرسل اليه', 'بيانات الشحنه']

    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    
    const handleReset = () => {
        setActiveStep(0);
    };
    const handleFormRender = ()=>{
        switch (activeStep){
            case 0:
                return <SenderData/>
            case 1:
                return <ConsigneeData/>
            case 2:
                return <ShipmentDetail/>
            default:
                return  <SenderData/>
        }
    }
    return (
        <div className={classes.nShipmentContainer}>
            <Box sx={{
                width:'70%',
                minWidth:'300px',
                minHeight:'500px',
                border:1,
                borderColor:'rgba(0,0,0,.2)',
                borderRadius:'5px',
                position:'relative',
                padding:3
            }}>
                <Box sx={{ 
                    display:'flex',
                    position:'relative',
                    height:'500px',
                    
                    flexDirection:'column',
                    justifyContent:'space-between' }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                        const stepProps = {};
                        return (
                            <Step key={label} {...stepProps} >
                            <StepLabel sx={{display:'flex' , gap:1}}>
                            {label}
                            </StepLabel>
                            </Step>
                        );
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Box sx={{ mx:'auto',position:'relative',display:'flex',flexDirection:'column', }}>
                                <AssignmentTurnedInIcon  sx={{fontSize:'125pt' ,mx:'auto', color:'#449D44'}} />
                                <Typography sx={{mx:'auto',fontSize:'16pt'}}>
                                    {language === 'en' ? 'Shipment Submitted SuccessFully' :'تم تسجيل الشحنة بنجاح'}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>{language ==='en' ? 'Reset':'إعادة تعيين'}</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Box sx={{mx:'auto' ,width:'100%',display:'flex' , flexDirection:'column',gap:2}}>
                                {handleFormRender()}
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                                >
                                {language === 'en' ? 'Back':'الرجوع'}
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? language ==='en' ?'Finish' :'انهاء' : language ==='en' ?'Next' :'التالي'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Box>    
            </Box>
        </div>
    );
}

export default Newshipment;
