import jwt from 'jsonwebtoken';

// login seller : /api/seller/login

export const sellerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (password === process.env.SELLER_PASSWORD && email === process.env.SELLER_EMAIL) {
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' });

            res.cookie('sellerToken', token, {
                httpOnly: true, // Prevents js to access cookie
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', //csrf protected
                maxAge: 7 * 24 * 60 * 60 * 1000, // cookie expiration time
            })
            res.json({ success: true, message: "Logged In" });
        } else {
            return res.json({ success: false, message: "Invalid Credentials" });
        }
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

//seller auth : /api/seller/is-auth

export const isSellerAuth = async (req,res) => {
    try {
        return res.json({success: true})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

//Logout seller: /api/seller/logout

export const sellerlogout = async (req,res) => {
    try {
        res.clearCookie('sellerToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        });
        res.json({success: true, message: "Logged Out"});
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}
