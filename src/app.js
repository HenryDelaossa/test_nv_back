import config from './config';
import express from 'express';
import morgan from 'morgan';
import capacityRoutes from './routes/capacity.routes';
import cors from 'cors';


const app = express();

/**-----config----- */
app.set('port', config.port); 


/**-----middlewares----- */
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

/**-----routes----- */
app.use('/api/capacity',capacityRoutes);

 
export default app