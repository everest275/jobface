import {getAllData,postData,putData,deleteData} from './query.util.js'
// controllerUtils.js
export const handleCRUD = async (req, res) => {
    const { method, model } = req.body; // Recibe el método y el modelo desde el cuerpo de la solicitud
    try {
        let result;

        result = method === 'getAll' ? await getAllData(model, req.body.populateOptions)
            : method === 'post' ? await postData(model, req.body.newData)
                : method === 'put' ? await putData(model, req.body.dataId, req.body.newData)
                    : method === 'delete' ? await deleteData(model, req.body.dataId)
                        : method === 'getOne' ? await getOneData(model, req.body.dataId)
                            : Promise.reject(new Error('Método no válido'));

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
