// create mysql connection for export
import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "0199510532",
  database: "nova-test",
});

export default connection;
