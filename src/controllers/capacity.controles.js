import getConnection from "../database/database";


/**obtener lista de capacitys de la DB */
const getCapacitys = async (req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query(`SELECT * FROM capacitys`);
        res.json({ data: result });

    } catch (error) {
        res.status(500);
        res.send(error.message);

    }
}
/**obtener capacity por id en DB */
const getCapacity = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ message: "Información incompleta" });
        }

        const connection = await getConnection();
        const result = await connection.query(`SELECT * FROM capacitys WHERE ID = ${id}`);
        res.json({ data: result[0] });

    } catch (error) {
        res.status(500);
        res.send(error.message);

    }
}

/**crear nuevo registro de capacity en la DB */
const createNewCapacity = async (req, res) => {
    try {
        const { lts, mlts, cm3, capacidadtotal, disponible } = req.body;
        if (!lts || !mlts || !cm3 || !capacidadtotal || !disponible) {
            res.status(400).json({ message: "Información incompleta" });
        }

        const capacitys = { lts, mlts, cm3, capacidadtotal, disponible };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO capacitys SET ?", capacitys);
        res.json(result)

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

/**actualizar un registro segun id en la DB */
const editCapacity = async (req, res) => {
    try {
        const { id } = req.params;
        const { lts, mlts, cm3, capacidadtotal, disponible } = req.body;

        if (!id || !lts || !mlts || !cm3 || !capacidadtotal || !disponible) {
            res.status(400).json({ message: "Información incompleta" });
        }

        const capacitys = { lts, mlts, cm3, capacidadtotal, disponible };
        const connection = await getConnection();
        const result = await connection.query("UPDATE capacitys SET ? WHERE ID = ?", [capacitys, id]);
        res.json(result)

    } catch (error) {
        res.status(500);
        res.send(error.message);

    }
}


export const methods = {
    getCapacitys,
    getCapacity,
    createNewCapacity,
    editCapacity
}