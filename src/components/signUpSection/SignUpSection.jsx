import React from 'react'
import bgImage from '../../assets/MacBookSec.png'
import './SignUpSection.css'
const SignUpSection = () => {
  return (
    <div 
            className="signupSection" 
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="content-container">
                <h1>Ready to Grow Your Business?</h1>
                <p>Sign Up Today And Start Connecting With The Right Marketplace Partners!</p>
                
                <div className="input-container">
                    <input type="text" placeholder="Sign Up To Find a Marketplace" />
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
  )
}

export default SignUpSection