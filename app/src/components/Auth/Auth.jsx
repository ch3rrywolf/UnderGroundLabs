// import React, { useState, useRef, useEffect } from "react";
// import firebase from '../../firebase';
// import 'firebase/compat/auth';

// const Auth = () => {
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [verificationCode, setVerificationCode] = useState('');
//     const [verificationId, setVerificationId] = useState('');
//     const recaptchaRef = useRef(null);


//     useEffect(() => {
//         if (recaptchaRef.current) {
//             recaptchaRef.current.innerHTML = '<div id="recaptcha-container"></div>';
//             window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
//                 'size': 'invisible',
//                 'callback': (response) => {
//                     console.log('reCAPTCHA solved');
//                 },
//                 'expired-callback': () => {
//                     console.log('reCAPTCHA expired');
//                 }
//             });
//         }
//     }, []);



//     const handleSendOtp = () => {
        
//         const phoneNumberWithCountryCode = `+216${phoneNumber}`; // Adjust the format as needed

//         const appVerifier = window.recaptchaVerifier;
//         firebase.auth().signInWithPhoneNumber(phoneNumberWithCountryCode, appVerifier)
//             .then((confirmationResult) => {
//                 setVerificationId(confirmationResult.verificationId);
//                 alert('Phone OTP has been sent to your phone.');
//                 console.log('OTP sent successfully:', confirmationResult);
//             })
//             .catch((error) => {
//                 console.error('Error sending OTP:', error);
//                 alert('Error sending OTP: ' + error.message);
//                 appVerifier.render().then(widgetId => {
//                     grecaptcha.reset(widgetId);  // Reset reCAPTCHA
//                 });
//             });
//     };

//     const handleVerifyOTP = () => {
//         const credentials = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
//         firebase.auth().signInWithCredential(credentials)
//             .then(userCredential => {
//                 console.log('User Logged In:', userCredential.user);
//             })
//             .catch(error => {
//                 console.error('Error verifying OTP: ', error);
//                 alert('Error verifying OTP: ' + error.message);
//             });
//     };

//     return (
//         <div>
//             <h1>Phone OTP Authentication</h1>
//             <div ref={recaptchaRef}></div>
//             <input
//                 type="tel"
//                 placeholder="+21629744655"
//                 value={phoneNumber}
//                 onChange={e => setPhoneNumber(e.target.value)}
//             />
//             <button onClick={handleSendOtp}>Send OTP</button>
//             <br/>
//             <input
//                 type="text"
//                 placeholder='Enter OTP'
//                 value={verificationCode}
//                 onChange={e => setVerificationCode(e.target.value)}
//             />
//             <button onClick={handleVerifyOTP}>Verify OTP</button>
//         </div>
//     );
// };

// export default Auth;