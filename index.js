import app from './app.js'
import { connectMongo } from './database/mongo.js'
import cors from 'cors'

async function main() {
    connectMongo()
    //Cors
    app.use(cors());
    //Setting static port
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log('server connected')
    });
}
main()