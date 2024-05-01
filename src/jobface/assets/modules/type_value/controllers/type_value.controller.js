import TypeValue from "../models/mongo.type_value.model.js"

export const getAll = async (req, res) => {
    const allData = await TypeValue.find().populate('type')
    res.json(allData)
}

export const getOne = async (req, res) => {
    const data = await TypeValue.findById(req.params.id)
    if (!data) return res.status(404).json({ message: "Data not found" })
    res.json(data)
}

export const update = async (req, res) => {
    const data = await TypeValue.findByIdAndUpdate(req.params.id, req.body)
    if (!data) return res.status(404).json({ message: "Data not found" })
    res.json(req.body)
};

export const create = async (req, res) => {
    const { type, typeValue, typeValueDescription, state } = req.body
    const newData = new TypeValue({
        type, typeValue, typeValueDescription, state
    })

    try {
        const savedData = await newData.save()
        res.json(savedData)
    } catch (error) {
        console.log({message:error})
    }
    
}

export const remove = async (req, res) => {
    const data = await TypeValue.findByIdAndDelete(req.params.id)
    if (!data) return res.status(404).json({ message: "Data not found" })
    res.json(data)
}
