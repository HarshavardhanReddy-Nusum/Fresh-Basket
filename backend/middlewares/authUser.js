import jwt from 'jsonwebtoken'

const authuser = async (req,res,next) => {
    const { token } = req.cookies;

    if(!token) {
        return res.json({success: false, message: 'Not Authorized'})
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        // console.log(tokenDecode);
        if(tokenDecode.id) {
            req.userId = tokenDecode.id;
            // console.log(req.userId);
        } else {
            return res.json({success: false, message: 'Not Authorized'});
        }
        next();
    } catch (error) {
        return res.json({success: false, message: error.message });
    }
}

export default authuser;