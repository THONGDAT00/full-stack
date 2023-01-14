import { useState } from "react";


import clsx from "clsx"
import style from './login.module.scss';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGoogleCircle, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";



function Login() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [eye, setEye] = useState(true)

    function handleLogin() {
        console.log(user, password)
        setUser('')
        setPassword('')
    }
     
    function handleUser(e) {
        console.log(e.target.value)
        setUser(e.target.value)
    }

    function handlePassword(e) {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    function handleEye() {
        setEye(!eye)
    }

    return(
        <div className={clsx(style.loginBackground ,'n-wide')}>
            <div className={clsx(style.loginContainer, 'n-wide_row' )}>
                <div className={clsx(style.loginContent, 'n-wide_c4',)}>
                    <div className={clsx(style.textLogin)}>Login</div>

                    <div className={clsx(style.formGroup)}>
                        <label>Username:</label>
                        <input
                        type="text" 
                        className={clsx(style.formControl)}
                        value={user}
                        onChange = {(e) => handleUser(e)}/>
                    </div>


                    <div className={clsx(style.formGroup)}>
                        <label>Password:</label>
                        <input 
                        type={eye === true ? "password" : "text"}
                        className={clsx(style.formControl, style.formControlPadding)}
                        value={password}
                        onChange = {(e) => handlePassword(e)}
                        />
                        {eye == true ?
                            <AiFillEye
                             className={clsx(style.eye)}
                             onClick={() => handleEye()}
                             /> :
                             <AiFillEyeInvisible
                             className={clsx(style.eye)}
                             onClick={() => handleEye()}
                             />
                        }
                    </div>

                    <button
                     className={clsx(style.buttonLogin)}
                     onClick={() => handleLogin()}>
                        Login
                    </button>
                    
                    <div className={clsx(style.forgot)}>Forgot your password?</div>
                    
                    
                    <span className={clsx(style.loginWith)}>Or login with</span>

                    <div className={clsx(style.wrapIcon)}>
                        <div className={clsx(style.subWrap, style.face)}>
                            <AiFillFacebook className={clsx(style.icon)}/>
                        </div>
                        <div className={clsx(style.subWrap, style.google)}>
                            <AiFillGoogleCircle className={clsx(style.icon)}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )





}


export default Login