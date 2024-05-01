// membershipController.js (o cualquier otro controlador)
import { handleCRUD } from '../../../templates/controller.util.js';

export const request = (req, res) => {
    handleCRUD(req, res); // Llama al método handleCRUD pasando la solicitud (req) y la respuesta (res)
};
