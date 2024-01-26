import "./SignIn.css";
import lineImage from "../../assets/Vector 7.svg";
import github from "../../assets/github.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import discord from "../../assets/discord.svg"
import google from "../../assets/google-icon.svg";
import apple from "../../assets/apple.svg"
import githubres from "../../assets/github-res.svg";
import twitterres from "../../assets/twitter-res.svg";
import linkedinres from "../../assets/linkedin-res.svg";
import discordres from "../../assets/discord-res.svg";
import lineImageRes from "../../assets/res-logo.svg";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function SignIn() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleChange = () => {
      if (email === '' || password === '') {
        setErrorMessage('Please enter credentials !!!!');
        return;
      }
  
      setErrorMessage('');
      navigate('/dashboard/upload');
    };
  return (
    <div className="main-container">
        <div className="left-container">
            <div className="logo-img">     
                <img src={lineImage} className="logo-sub-img"/>
            </div>
            <div className="logo-img-res">     
                <img src={lineImageRes} className="logo-sub-img-res"/>
            </div>
            <div className="base-class"><h3 className="base-class-text">BASE</h3></div>
            <div className="base-class-res"><h3 className="base-class-text-res">Base</h3></div>
            <div className="separator"></div>
            <div className="social-icons">
                <img src={github} className="social-icons-image"/>
                <img src={twitter} className="social-icons-image"/>
                <img src={linkedin} className="social-icons-image"/>
                <img src={discord} className="social-icons-image"/>
            </div>
        </div>
        <div className="right-container">
            <div className="right-sub-container">
                <h2 className="signin-heading">Sign In</h2>
                <p className="signin-para">Sign in to your account</p>
                <div className="signin-with">
                    <button className="signin"><img src={google}/><span className="signin-text">Sign in with Google</span></button>
                    <button className="signin"><img src={apple}/><span className="signin-text">Sign in with Apple</span></button>
                </div>
                <form className="signin-form">
                    <label htmlFor="username" className="signin-label" >Email Address</label>
                    <input type='text' placeholder='Enter your email address' className="signin-input" value={email} onChange={ (e) => setEmail(e.target.value)}/>

                    <label htmlFor="password" className="signin-label">Password</label>
                    <input type='password' placeholder='Enter your password' className="signin-input" value={password} onChange={ (e) => setPassword(e.target.value)}/>
                    <p className="forgot-password">Forgot Password?</p>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button className="sigin-button" onClick={handleChange}>Sign In</button>
                </form>
                <p className="account-text">{`Don't have an account?`}<span className="register-text">Register here</span></p>
                <div className="social-icons-responsive">
                    <img src={githubres} className="social-icons-image" alt="GitHub" />
                    <img src={twitterres} className="social-icons-image" alt="Twitter" />
                    <img src={linkedinres} className="social-icons-image" alt="LinkedIn" />
                    <img src={discordres} className="social-icons-image" alt="Discord" />
                </div>
            </div>
        </div>
    </div>
  )
}
