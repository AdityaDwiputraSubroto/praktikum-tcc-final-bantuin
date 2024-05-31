import {Sequelize} from "sequelize";

const db = new Sequelize('tcc','root','root',{
    host: '34.124.164.152',
    dialect: 'mysql'
});

export default db;