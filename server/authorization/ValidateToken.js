const jwt = require("jsonwebtoken")

const TokenAuth = (req, resp, next) => {
    const full_token = req.headers['authorization'];
    var ary = full_token.split(" ");
    let actualToken = ary[1];
    let isValidToken;
    try {
        isValidToken = jwt.verify(actualToken, process.env.SEC_KEY);
    }
    catch (err) {
        console.log("Token Expired");
        resp.json({ status: false, message: "unauthorized" });
        return;
    }
    if (isValidToken) {
        console.log("*******************Valid**************************");
        const tobj = jwt.decode(ary[1]);
        req.query.obj = tobj.result.obj;
        console.log(tobj);
        next();
    }
    else {
        resp.json({ status: false, message: "unauthorized" });
        return;
    }
}

module.exports = TokenAuth;