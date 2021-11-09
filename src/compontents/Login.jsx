import React , {useState} from 'react';
import classes from '../styles/login.module.css'
import loginImage from '../assets/login.png'
import { useHistory } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {setUser} from '../redux/actions/user'
const Login = () => {
    const {language}= useSelector((state)=>({language:state.languageReducer.lang}));
    const [formData , setFormData] = useState({email:'', password:''})
    const history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit  = (e)=>{
        e.preventDefault()
        dispatch(setUser(formData))
        // call the adding user action 
        history.push('/')
    }
    const handleChange = (e)=>{
        setFormData((prevState)=> ({...prevState,[e.target.name]:e.target.value}))
    }
    return (
        <div className={classes.loginPage}>
            <div className={classes.loginForm}>
                <div className={classes.loginFormAvatar}>
                    <img src={loginImage} alt="" />
                </div>
                <div className={classes.loginFormContent}>
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" placeholder={language === 'en' ? 'please write your email' :'من فضلك ادخل البريد الالكتروني'} value={formData.email} onChange={handleChange} />
                        <input autoComplete="off" type="password" name="password" placeholder={language === 'en' ? 'please write your password' :'من فضلك ادخل كلمة المرور '} value={formData.password} onChange={handleChange} />
                        <button type="submit" className={classes.submitBtn}>
                            {language === 'en' ? 'LOGIN' :'تسجيل الدخول'}
                        </button>
                    </form>
                    <div className={classes.signupPointer}>
                        Don't Have Account ? Signup Instead
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;
