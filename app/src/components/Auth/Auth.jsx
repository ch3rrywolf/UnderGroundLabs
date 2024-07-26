import React, { useState, useRef } from "react";
import firebase from '../../firebase';
import 'firebase/compat/auth';

const Auth = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const recaptchaRef = useRef(null);

    const handleSendOtp = () => {
        if (recaptchaRef.current) {
            recaptchaRef.current.innerHTML = '<div id="recaptcha-container"></div>';
        }
        const verifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            size: 'invisible'
        });

        firebase.auth().signInWithPhoneNumber(phoneNumber, verifier)
            .then(confirmationResult => {
                console.log('OTP sent successfully:', confirmationResult);
            })
            .catch(error => {
                console.error('Error sending OTP:', error);
            });
    };

    return (
        <div>
            <h1>Phone OTP Authentication</h1>
            <div ref={recaptchaRef}></div>
            <input
                type="tel"
                placeholder="29744655"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
            />
            <button onClick={handleSendOtp}>Send OTP</button>
        </div>
    );
}

export default Auth;