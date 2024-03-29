import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  'HERO_CLOUD_PROJECT', // Database name
  'root',          // MariaDB username
  'ovLcA5^p8',      // MariaDB password
  {
    host: 'localhost', // MariaDB host
    dialect: 'mariadb', // MariaDB dialect
    port: 3306, // MariaDB port
    define: {
      timestamps: false
    }
  }
);

export default sequelize;

