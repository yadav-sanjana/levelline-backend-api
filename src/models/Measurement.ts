import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

class Measurement extends Model {
  public id!: number;
  public orderId!: number;
  public chest!: number;
  public waist!: number;
  public hips!: number;
  public sleeveLength!: number;

  // Additional fields can be added based on requirements

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Measurement.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    chest: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    waist: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    hips: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sleeveLength: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: 'measurements',
    sequelize,
  }
);

export default Measurement;
