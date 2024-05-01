import bcrypt from 'bcryptjs'
import UserModel from '../models/mongo/UserModel.js'
import { createAccessToken } from '../../libs/jwt.lib.js'


export const register = async (req, res) => {

    const stateActiveId = "661064a104dbb558536c4552"

    const { name, email, password, membership, userState } = req.body
    try {
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new UserModel({
            name,
            email,
            password: passwordHash,
            membership,
            userState,
        })

        const userSaved = (await newUser.save())
        const userSavedAndFound = await UserModel.findOne({ email: userSaved.email }).populate('state').populate('membership');
      
        const token = await createAccessToken({ id: newUser.id })
        res.cookie("token", token)
        res.json({
            id: userSavedAndFound.id,
            name: userSavedAndFound.name,
            email: userSavedAndFound.email,
            password: userSavedAndFound.password,
            membership: userSavedAndFound.membership,
            userState: userSavedAndFound.userState,
            createdAt: userSavedAndFound.createdAt,
            updatedAt: userSavedAndFound.updatedAt,
        })

    } catch (error) {
        res.status(500).json({ message: "Register error" })
    }
};

export const login = async (req, res) => {

    const { email, password } = req.body
    console.log(email,password)
    const userFound = await UserModel.findOne({ email }).populate('membership').populate('userState').populate('picture');
    console.log(userFound)
    if (!userFound) return res.status(400).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) return res.status(400).json({ message: "Incorrect password" });
    const token = await createAccessToken({ id: userFound.id })

    res.cookie("token", token)

    res.json({
        userState: userFound.userState,
        id: userFound.id,
        name: userFound.name,
        email: userFound.email,
        password: userFound.password,
        membership: userFound.membership,
        proyects: userFound.proyects,
        profilePicture: userFound.profilePicture,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    })
    console.log(userFound)
};

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
};
