import { connect, set} from 'mongoose';
import mongoose from 'mongoose';
import { UserModel } from '../models/user.model.js';
import { FoodModel } from '../models/food.model.js';
import { sample_foods } from '../data.js';
import { sample_users } from '../data.js';
import bcrypt from 'bcryptjs';

const PASSWORD_HASH_SALT_ROUNDS = 10;

// const mongoose = require('mongoose');

set('strictQuery', true);

export const dbconnect = async() => {
    try {
      mongoose.connect("mongodb://localhost:27017/foodmine-db", {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        await seedUsers();
        await seedFoods();
        console.log('connect successfully---');
      } catch (error) {
        console.log(error);
      }
};

async function seedUsers() {
    const usersCount = await UserModel.countDocuments();
    if(usersCount > 0){
        console.log('User seed is already done!');
        return;
    }
    for(let user of sample_users){
        user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
        await UserModel.create(user);
    }

    console.log('Users seed is done!');
}

async function seedFoods() {
    const foods = await FoodModel.countDocuments();
    if (foods > 0) {
      console.log('Foods seed is already done!');
      return;
    }
  
    for (const food of sample_foods) {
      food.imageUrl = `/foods/${food.imageUrl}`;
      await FoodModel.create(food);
    }
  
    console.log('Foods seed Is Done!');
  }
  