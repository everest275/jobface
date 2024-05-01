import Membership from "../models/mongo.membership.model.js"

export const getAll = async (req, res) => {
    const allData = await Membership.find()
    res.json(allData)
}

export const getOne = async (req, res) => {
    const data = await Membership.findById(req.params.id)
    if (!data) return res.status(404).json({ message: "Data not found" })
    res.json(data)
}

export const update = async (req, res) => {
    const data = await Membership.findByIdAndUpdate(req.params.id, req.body)
    if (!data) return res.status(404).json({ message: "Data not found" })
    res.json(req.body)
};

export const create = async (req, res) => {
    const { membership, range, description, membershipDurationMonths, price, state } = req.body
    const newData = new Membership({
        membership, range, description, membershipDurationMonths, price, state
    })
    const savedData = await newData.save()
    res.json(savedData)
}

export const remove = async (req, res) => {
    const data = await Membership.findByIdAndDelete(req.params.id)
    if (!data) return res.status(404).json({ message: "Data not found" })
    res.json(data)
}
