import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

class Order extends Model {
  public id!: number;
  public userId!: number;
  public outfitType!: string;
  public fabricType!: string;
  public style!: string;
  public color!: string;

  // Additional fields can be added based on requirements

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    outfitType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fabricType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    style: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'orders',
    sequelize,
  }
);

export default Order;
