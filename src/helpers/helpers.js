import getConnection from "../database/database";


export const dataToResp = async (id) => {
    const connection = await getConnection();
    const data = await connection.query(`SELECT * FROM capacitys WHERE ID = ${id}`);
    return data[0]
}