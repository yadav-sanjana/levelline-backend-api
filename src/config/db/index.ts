import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'levelline',
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
