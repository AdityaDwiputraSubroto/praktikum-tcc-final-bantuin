import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Supplier = db.define('suppliers',{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING
},{
    freezeTableName:true
});

export default Supplier;

(async()=>{
    await db.sync();
})();