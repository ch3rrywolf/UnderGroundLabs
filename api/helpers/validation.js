const { check } = require('express-validator');

exports.registerValidation = [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail().normalizeEmail({
        gmail_remove_dots:true
    }),
    check('mobile', 'Mobile No. should be contains 8 digits').isLength({
        min:8,
        max:8
    }),
    check('password', 'Password must be greater than 6 characters, and contians at least one uppercase lettre, on lowercase lettre, and one number, and one special character')
    .isStrongPassword({
        minLength:6,
        minUppercase:1,
        minLowercase:1,
        minNumbers:1,
    }),
    check('image').custom( (value, {req}) => {
        if(req.file.mimetype === 'image/jpeg' || req.file.mimetype === 'image/png'){
            return true;
        }
        else{
            return false;
        }
    }).withMessage("Please upload an image Jpeg, PNG")
];

exports.sendMailVerificationValidator = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({
        gmail_remove_dots:true
    }),
];

exports.passwordResetValidator = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({
        gmail_remove_dots:true
    }),
];

exports.loginValidator = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({
        gmail_remove_dots:true
    }),
    check('password', 'Password is required').not().isEmpty(),
];

exports.updateProfileValidator = [
    check('name', 'Name is required').not().isEmpty(),
    check('mobile', 'Mobile No. should be contains 8 digits').isLength({
        min:8,
        max:8
    }),
];