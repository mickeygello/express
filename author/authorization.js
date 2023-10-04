import jwt from "jsonwebtoken"

const listByPassURL = ['/users/login', '/users/register'];


const checkExistURL = (url) =>{
    listByPassURL.forEach(u =>{
        if(u.toLowerCase().trim() == url.toLowerCase().trim()){
            return true;
        }
    })
}

const checkToken = (req, res, next) => {
    //xác định những request nào đi qua mà k cần kiểm tra
    //Bypass: login, register,...
    debugger
    if (req.url.toLowerCase().trim() == '/users/login'.toLowerCase().trim() ||
        req.url.toLowerCase().trim() == '/users/register'.toLowerCase().trim()) {

        //chuyen tiep
        next()

        //ket thuc qua trinh kiem tra
        return
    }

    //Xác thực jwt của request cần kiểm tra
    try {
        const token = req.headers?.authorization?.split(' ')[1];
        const jwtObject = jwt.verify(token, process.env.SECRET_KEY_JWT);
        //boc ra du lieu cua expired (thoi gian song cua token)
        let isExpired = Date.now() >= jwtObject.exp * 1000; //false => con tg, true => het tg
        if (isExpired) {
            res.status(400).json({ message: "Access token expired" })
            res.end()
        }
        else {
            next()
            return
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
        // throw new Error(error.toString());
    }
}

export default checkToken