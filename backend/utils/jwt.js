import jwt from "jsonwebtoken"

const createToken = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET_KEY, {
        expiresIn: 3 * 24 * 60 * 60
    })
} 

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET_KEY)
}

export {
    createToken,
    verifyToken
}