import jwt from "jsonwebtoken"; /// gerar token


export const auth = async (data: string | undefined) => {
    
    const secret = process.env.SECRET_KEY
    let decoded
    
    if (data && secret) {

        try {
    
            const token = data.split(" ")[1]; // Divide "Bearer <token>"
            decoded =  jwt.verify(token, secret )
    
        } catch {
            return null
        }
        return decoded
        
    }



}