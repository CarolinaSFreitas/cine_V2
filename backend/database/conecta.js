import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  'api_next', 'aluno', 'senacrs', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});