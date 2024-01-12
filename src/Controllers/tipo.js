import { TipoSchema } from "../Models/tipo.js"
import mongoose from "mongoose"

const Tipos=mongoose.model('Tipos',TipoSchema, 'tipos')

export const getTipos = async(req, res) => {
    try {
      const tipo= await Tipos.find()
      res.json(tipo)
    } catch (error) {
        res.status(500).json({message:'Error al listar tipos'})
    }
    
}

export const getTipo = async (req, res) => {
    const {id} = req.params;
   try {
    const tipo = await Tipos.findById(id)
    if(!tipo)res.status(404).json({message:'No se encontro tipo'})
    res.json(tipo)
   } catch (error) {
    res.status(500).json({message:'Error buscando tipo'})
    
   }
}

export const createTipo = async (req, res) => {
    try {
        const tipo = new Tipos(req.body);
        const tipoSave = await tipo.save();
        res.json(tipoSave);
    } catch (error) {
        console.error('Error al guardar tipo:', error);

        // Manejo de errores de validación de Mongoose
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(e => e.message);
            res.status(400).json({ message: 'Error de validación', errors: validationErrors });
        } else {
            res.status(500).json({ message: 'Error guardando tipo', error: error.message });
        }
    }
};

export const updateTipo = async (req, res) => {
    const {id}=req.params
    if(!req.body) return req.status(404).json({message:"Los datos no pieden venir vacios"})
    if(id!==req.body._id) return req.status(404).json({message:"El ID no existe"})
    try {
        const tipoUpdate=await Tipos.findByIdAndUpdate(id,req.body,{
            new:true
        })
        if(!tipoUpdate) return req.status(404).json({message:"No se pudo actualizar tipo"})
        res.json(tipoUpdate)
    } catch (error) {
        req.status(404).json({message:error.message||"Error al actualizar tipo"})
    }
}

export const deleteTipo = async (req, res) => {
   const {id}= req.params
try {
    const tipoDelete=await Tipos.findByIdAndDelete(id) 
    if(!tipoDelete) return res.status(404).json({message:"No se encontro tipo"})
    res.json(tipoDelete)
} catch (error) {
    res.status(500).json({message:"Error al eliminar tipo"})
}
}
