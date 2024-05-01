export const getAllData = async (Model, populateOptions = []) => {
    try {
        let query = Model.find();
        for (const option of populateOptions) {
            query = query.populate(option);
        }
        const allData = await query;
        return allData;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const postData = async (Model,newData) => {
    try {
        const Data = new Model(newData)
        let query = Data.save();
        const allSaved = await query;
        return allSaved;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const putData = async (Model,dataId,newData) => {
    try {
        const dataSaved = await Model.findByIdAndUpdate(dataId, newData)
        return dataSaved;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteData = async (Model,dataId) => {
    try {
        const dataDeleted = await Model.findByIdAndDelete(dataId)
        return dataDeleted;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getOneData = async (Model,dataId) => {
    try {
        const dataFounded = await Model.findById(dataId)
        return dataFounded;
    } catch (error) {
        throw new Error(error.message);
    }
};
