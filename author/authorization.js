import jwt from "jsonwebtoken"

const checkToken = async (req, res, next) => {
    //xác định những request nào đi qua mà k cần kiểm tra
    //Bypass: login, register,...
    debugger
    if(req.url.toLowerCase() == 'users/login'.toLowerCase() || req.url.toLowerCase() == 'users/register'.toLowerCase()){
        
        //chuyen tiep
        next()

        //ket thuc qua trinh kiem tra
        return
    }

    //Xác thực jwt của request cần kiểm tra
    const token = req.headers.authorization.split(' ')[1];

    try{
        const jwtObject = jwt.verify(token, process.env.SECRET_KEY_JWT)
        //boc ra du lieu cua expired (thoi gian song cua token)

    }catch(error){

    }
}

export default{
    checkToken
}