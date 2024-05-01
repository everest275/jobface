import fs from 'fs';
import path from 'path';

// Función para buscar los archivos de modelo en una carpeta específica
const findModels = (modelsDir) => {
    // Obtener la ruta completa del directorio de modelos
    const absoluteModelsDir = path.join(__dirname, modelsDir);

    // Leer los archivos en el directorio de modelos
    const modelFiles = fs.readdirSync(absoluteModelsDir);

    // Array para almacenar los modelos encontrados
    const models = [];

    // Iterar sobre los archivos encontrados
    modelFiles.forEach(file => {
        // Verificar si el archivo es un archivo de modelo (.js)
        if (file.endsWith('.js')) {
            // Importar el modelo y agregarlo al array de modelos
            const modelName = path.basename(file, '.js');
            const model = require(path.join(absoluteModelsDir, file)).default;
            models.push({ name: modelName, model: model });
        }
    });

    // Devolver los modelos encontrados
    return models;
};

// Componente predeterminado que exporta la función findModels
export default findModels;
