import Users from '../models/mongo/UserModel.js'
export const profile = async (req, res)=>{

    const userFound = await Users.findById(req.user.id) 
    if(!userFound) return res.status(400).json({message:"user not found"})

    return res.json({
        id: userFound._id,
        email: userFound.email,
        password: userFound.password,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
};