import PortfolioProyects from "../models/mongo.portfolio_proyect.model.js"
import fs from 'fs'; // Importa el módulo 'fs' de Node.js

export const getAll = async (req, res) => {
    const portfolioProyects = await PortfolioProyects.find().populate('portfolio')
    res.json(portfolioProyects)
}

export const getOne = async (req, res) => {
    const portfolioProyects = await PortfolioProyects.findById(req.params.id)
    if (!portfolioProyects) return res.status(404).json({ message: "Portfolio proyect not found" })
    res.json(portfolioProyects)
}

export const update = async (req, res) => {
    const portfolioProyect = await PortfolioProyects.findByIdAndUpdate(req.params.id, req.body)
    if (!portfolioProyect) return res.status(404).json({ message: "Portfolio proyect not found" })
    res.json(req.body)
};



export const create = async (req, res) => {
    const { name, description, link, portfolio,state } = req.body
    const newData = new PortfolioProyects({
        name, description, link, portfolio,state
    })
    const savedData = await newData.save()
    res.json(savedData)
}

export const remove = async (req, res) => {
    const data = await PortfolioProyects.findByIdAndDelete(req.params.id)
    if (!data) return res.status(404).json({ message: "Portfolio proyect not found" })
    res.json(data)
}
