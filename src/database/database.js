import mysql from 'promise-mysql';
import config from '../config';

/**Db info */
const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
})

const getConnection = () => {
    return connection
};

export default getConnection