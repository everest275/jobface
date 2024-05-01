import unlink from 'fs-extra'
import fs from 'fs'; // Importa el módulo 'fs' de Node.js
import UploadModel from '../models/mogo.upload.model.js'
export const uploadfile = async (req, res) => {
   res.render('upload')
}

export const upload = async (req, res) => {
  
   res.json("upload")
}

export const remove = async (req, res) => {
   
   res.send('Image deleted')
}
export const finterest = async (req, res) => {

   res.render('finterest')
}

export const getFile = async (req, res) => {
  res.render("text")

}

