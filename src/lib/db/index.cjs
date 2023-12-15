export const oracledb = require('oracledb');
require('dotenv').config();

// contains the hr schema password
const config = {
	user: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	connectString: process.env.DATABASE_HOST
};

export async function getConnection() {
	const db = await oracledb.getConnection(config);
	return db;
}

module.exports = { getConnection, oracledb };