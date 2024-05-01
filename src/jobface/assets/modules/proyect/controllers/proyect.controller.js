import Proyects from "../models/mongo.proyect.model.js"

export const getAllProyects = async (req, res) => {
    const proyects = await Proyects.find({
        user: req.user.id
    }).populate('user')
    res.json(proyects)
}

export const getOneProyect = async (req, res) => {
    const proyect = await Proyects.findById(req.params.id)
    if (!proyect) return res.status(404).json({message:"Proyect not found"})
    res.json(proyect)
}

export const updateProyect = async (req, res) => {
    const proyect = await Proyects.findByIdAndUpdate(req.params.id, req.body)
    if (!proyect) return res.status(404).json({ message: "Proyect not found" })
    res.json(req.body)
};


export const createProyect = async (req, res) => {
    const { title, description,state } = req.body
    const newProyect = new Proyects({
        title, description,state, user: req.user.id
    })
    const savedProyect = await newProyect.save()
    res.json(savedProyect)
}

export const deleteProyect = async (req, res) => {
    const proyect = await Proyects.findByIdAndDelete(req.params.id)
    if (!proyect) return res.status(404).json({ message: "Proyect not found" })
    res.json(proyect)
}
