
exports.checkActiveSession = (req, res, next) => {
    const authHeader = req.headers.sessionid;

    //mocking jwt functionality...
    if (authHeader && authHeader === 'excFRtuy22ghskdaytrok=') {
        next();
    } else {
        res.status(400).send({ message: 'User not authorized...' });
    }
};