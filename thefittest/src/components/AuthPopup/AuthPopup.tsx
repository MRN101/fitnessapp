import React, { useState } from 'react';
import './AuthPopup.css';
import Image from 'next/image';
import logo from '@/assets/logo for a fitness tracking website.jpg';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const AuthPopup = () => {
    const [showSignup, setShowSignup] = useState<boolean>(false);
    const [gender, setGender] = useState<string | null>(null);

    const handleLogin = () => {
        console.log('Logging in...');
    };

    const handleSignup = () => {
        console.log('Signing up with gender:', gender);
    };

    return (
        <div className="popup">
            {showSignup ? (
                // Signup Form
                <div className="authform">
                    <div className="left">
                        <Image src={logo} alt="Logo" />
                    </div>
                    <div className="right">
                        <h1>Create an Account</h1>
                        <form>
                            <Input className="custom-input" placeholder="Full Name" size="lg" variant="outlined" />
                            <Input className="custom-input" placeholder="Email" size="lg" variant="outlined" />
                            <Input className="custom-input" type="password" placeholder="Password" size="lg" variant="outlined" />

                            {/* Age & Weight Side by Side */}
                            <div className="input-row">
                                <Input className="custom-input" type="number" placeholder="Age" size="lg" variant="outlined" />
                                <Input className="custom-input" type="number" placeholder="Weight (kg)" size="lg" variant="outlined" />
                            </div>

                            {/* Height in Feet & Inches */}
                            <div className="input-row">
                                <Input className="custom-input" type="number" placeholder="Height (ft)" size="lg" variant="outlined" />
                                <Input className="custom-input" type="number" placeholder="Height (in)" size="lg" variant="outlined" />
                            </div>

                            {/* Gender Selection */}
                            <Select
                                className="custom-input"
                                placeholder="Select Gender"
                                size="lg"
                                variant="outlined"
                                onChange={(event, value) => setGender(value)}
                            >
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>

                            <button className="custom-button" type="button" onClick={handleSignup}>Sign Up</button>
                        </form>
                        <p>
                            Already have an account? 
                            <button className="switch-button" type="button" onClick={() => setShowSignup(false)}>Login</button>
                        </p>
                    </div>
                </div>
            ) : (
                // Login Form
                <div className="authform">
                    <div className="left">
                        <Image src={logo} alt="Logo" />
                    </div>
                    <div className="right">
                        <h1>Login to become fitter</h1>
                        <form>
                            <Input className="custom-input" placeholder="Email" size="lg" variant="outlined" />
                            <Input className="custom-input" type="password" placeholder="Password" size="lg" variant="outlined" />
                            <button className="custom-button" type="button" onClick={handleLogin}>Login</button>
                        </form>
                        <p>
                            Don't have an account? 
                            <button className="switch-button" type="button" onClick={() => setShowSignup(true)}>Sign Up</button>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthPopup;
