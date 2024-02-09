import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;

  // Additional fields can be added based on requirements

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    sequelize,
  }
);

export default User;
