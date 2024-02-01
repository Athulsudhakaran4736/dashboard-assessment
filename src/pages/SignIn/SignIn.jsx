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
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

export default function SignIn() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleChange = (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email || !password) {
            setErrorMessage('Please enter both email and password.');
            setTimeout(() => {
                setErrorMessage('');
            }, 2000);
            return;
        }

        if (!emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            setTimeout(() => {
                setErrorMessage('');
            }, 2000);
            return;
        }

        // Assuming email and password validation is successful, you can set a success message
        setErrorMessage('Login successful. Redirecting...');

        // After 3 seconds, clear the success message and navigate to the dashboard
        setTimeout(() => {
            setErrorMessage('');
            navigate('/dashboard/upload');
        }, 1000);
    };
    const handleGoogleLoginSuccess = (response) => {
        // Handle successful Google login
        console.log(response);

        // You can send the Google user data to your backend for authentication

        // For now, simulate a successful login
        setErrorMessage('Login successful. Redirecting...');

        // After 3 seconds, clear the success message and navigate to the dashboard
        setTimeout(() => {
            setErrorMessage('');
            navigate('/dashboard/upload');
        }, 1000);
    };

    const handleGoogleLoginFailure = (error) => {
        // Handle Google login failure
        console.error(error);

        // You can display an error message if needed
        setErrorMessage('Google login failed. Please try again.');
    };
    const clientId = "236177837354-3ltcag2b9n19q956t93opr6om5ujbubo.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
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
                    <GoogleLogin
                        clientId={clientId}
                        onSuccess={handleGoogleLoginSuccess}
                        onFailure={handleGoogleLoginFailure}
                        cookiePolicy={'http://localhost:5174'}
                        isSignedIn={true}
                    >
                      <button className="signin"><img src={google}/><span className="signin-text">Sign in with Google</span></button>   
                    </GoogleLogin>
                    <button className="signin"><img src={apple}/><span className="signin-text">Sign in with Apple</span></button>
                </div>
                <form className="signin-form" onSubmit={handleChange}>
                    <label htmlFor="username" className="signin-label" type="email">Email Address</label>
                    <input type='text' placeholder='Enter your email address' className="signin-input" value={email}  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        title="Enter a valid email address"onChange={ (e) => setEmail(e.target.value)}/>

                    <label htmlFor="password" className="signin-label">Password</label>
                    <input type='password' placeholder='Enter your password' className="signin-input" value={password} onChange={ (e) => setPassword(e.target.value)}/>
                    <p className="forgot-password">Forgot Password?</p>
                    <p className={`message ${errorMessage.includes('Login successful') ? 'success' : 'error'}`}>
                         {errorMessage}
                    </p>
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
    </GoogleOAuthProvider>
  )
}
