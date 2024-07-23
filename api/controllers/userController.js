const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const { validationResult } = require('express-validator');

const mailer = require('../helpers/mailer');

const userRegistre = async(req, res) => {

    try{

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                success: false,
                msg: 'Errors',
                errors: errors.array()
            });
        }

        const { name, email, mobile, password } = req.body;

        const isExists = await User.findOne({ email });

        if(isExists){
            return res.status(400).json({
                success: false,
                msg: 'Email Already Exists'
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            mobile,
            password:hashPassword,
            image:'images/'+req.file.filename
        });

        const userData = await user.save();

        const msg = '<p> Hii '+name+', Please <a href="http:/127.0.0.1:3000/mail-verification?id='+userData._id+'">Verify</a> your mail.</p>';

        mailer.sendMail(email, 'Mail Verification Account UnderGroundLabs', msg);

        return res.status(200).json({
            success: true,
            msg: 'Registered Successfully!',
            user: userData
        });

    }catch(error){
        return res.status(400).json({
            success: false,
            msg: error.message
        });
    }

}

module.exports = {
    userRegistre
}