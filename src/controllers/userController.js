const connection = require('../database/connection');

const responseModel = {
    success: false,
    data: [],
    error: []
}


module.exports = {

    async create(req, res){
        const response = {...responseModel}

        const { username, password } = req.body;

        const [, affectRows] = await connection.query(`INSERT INTO users VALUES(DEFAULT, '${username}', '${password}', NOW(), NOW())`);

        response.success = affectRows > 0;
        console.log(req.body)

        return res.json(req.body);
    },


    async login(req, res){
        const response = {...responseModel}

        const { username, password } = req.body;
        const [, data] = await connection.query(`SELECT * FROM users WHERE username='${username}' AND password='${password}'`);
 

        response.success = data.length > 0;
        response.data = data;
        return res.json(response);
    }
} 