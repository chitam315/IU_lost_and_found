const express = require('express');
const router = express.Router();
// import jwt from 'jsonwebtoken'
const jwt = require('jsonwebtoken')
var cookieParser = require('cookie-parser')

const siteController = require('../app/controllers/SiteController');

const Accounts = require('../app/model/Account')

const getCookies = async (req, res, next) => {
    try {
        var result = jwt.verify(req.cookies.token, 'password')
        console.log(result);
        let acc = await Accounts.findOne({ _id: result._id });
        req.user = acc
        next()
    } catch (error) {
        next()
    }
}

router.get('/', getCookies, siteController.index);

module.exports = router;
