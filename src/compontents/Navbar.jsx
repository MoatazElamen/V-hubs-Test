import React from 'react';
import  classes from '../styles/navbar.module.css'
import { useSelector ,useDispatch } from 'react-redux';
import Logo from '../assets/log.png'
import {ChangeLanguage} from '../redux/actions/language'
const Navbar = () => {
    const dispatch = useDispatch()
    const {language ,AuthedUser} = useSelector((state)=>({language:state.languageReducer.lang ,AuthedUser:state.UserReducer.authedUser}))
    const handleToggleLang = ()=>{
        language === 'en' ? dispatch(ChangeLanguage('ar')) : dispatch(ChangeLanguage('en'))
    }
    return (
        <div className={classes.navbarContainer}>
            <div className={classes.brandContainer}>
                <img src={Logo} className={classes.brandImg} alt="vhubs-logo" />
            </div>
            <div className={classes.navbarData}>

                {AuthedUser !== null && (
                    <div className={classes.userAvatar}>
                        {AuthedUser.email[0].toUpperCase()}
                    </div>
                )}
            <div className={classes.languagePicker} onClick={handleToggleLang} >
            {language === 'en' ? 'Ar':'En'}
            </div>
            </div>
        </div>
    );
}

export default Navbar;
