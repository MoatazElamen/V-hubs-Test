import React , {useState} from 'react';
import classes from '../styles/login.module.css'
import loginImage from '../assets/login.png'
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setUser} from '../redux/actions/user'
const Login = () => {
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
                        <input type="email" name="email" placeholder="Type your personal Email" value={formData.email} onChange={handleChange} />
                        <input type="password" name="password" placeholder="Type your Password" value={formData.password} onChange={handleChange} />
                        <button type="submit" className={classes.submitBtn}>
                            LOGIN
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
