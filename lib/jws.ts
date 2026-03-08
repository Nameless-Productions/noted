import jwt from "jsonwebtoken";

const secret = process.env.SECRET || "im missing";

export function createToken(payload: object){
    return jwt.sign(payload, secret, {expiresIn: "7d"});
}

export function verifyToken(token: string): object | undefined{
    try{
        return jwt.verify(token, secret) as object;
    }
    catch{
        return undefined;
    }
}