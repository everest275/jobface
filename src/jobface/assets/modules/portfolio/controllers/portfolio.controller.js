import Portfolios from "../models/mongo.portfolio.model.js"

export const getAll = async (req, res) => {
    const portfolios = await Portfolios.find({
        user: req.user.id
    }).populate('proyect').populate('style')
    res.json(portfolios)
}

export const getOne = async (req, res) => {
    const portfolio = await Portfolios.findById(req.params.id)
    if (!portfolio) return res.status(404).json({message:"Portfolio not found"})
    res.json(portfolio)
}

export const update = async (req, res) => {
    const portfolio = await Portfolios.findByIdAndUpdate(req.params.id, req.body)
    if (!portfolio) return res.status(404).json({ message: "Proyect not found" })
    res.json(req.body)
};


export const create = async (req, res) => {
    const {  style, name, country, city, job, aboutYou, portfolioEmail,proyect,state } = req.body
    const newProyect = new Portfolios({
        style, name, country, city, job, aboutYou, portfolioEmail,proyect,state
    })
    const savedProyect = await newProyect.save()
    res.json(savedProyect)
}

export const remove = async (req, res) => {
    const proyect = await Portfolios.findByIdAndDelete(req.params.id)
    if (!proyect) return res.status(404).json({ message: "Proyect not found" })
    res.json(proyect)
}
