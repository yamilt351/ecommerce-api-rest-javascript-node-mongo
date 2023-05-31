import Encrypt from '../helpers/bcrypt.js';
import User from '../Models/userModel.js';
import { JWT_TOKEN } from '../../index.js';
import Token from '../helpers/token.js';

//config
const userService = {
  signIn,
  signUp,
  getUser,
  getUserStat,
};

//create instances to call clases
const encrypt = new Encrypt();
const jwt = new Token();

async function findByEmail(email) {
  const alreadyExist = await User.findOne({ email: { $eq: email } });
  if (alreadyExist) {
    return alreadyExist;
  } else {
    return false;
  }
}

async function signIn(user) {
  const existingUser = await findByEmail(user.email);

  if (!existingUser) {
    throw new Error('not found');
  } else {
    const isPasswordMatch = await encrypt.comparePassword(
      user.password,
      existingUser.password,
    );
    if (!isPasswordMatch) {
      throw new Error('wrong credentials');
    } else {
      const userId = existingUser._id.toString();
      const token = await jwt.generateToken(userId, JWT_TOKEN, {
        expiresIn: '48h',
      });
      return { user: existingUser, sendToken: token };
    }
  }
}

async function signUp(user) {
  const allowedFields = ['email', 'password', 'username'];

  const filteredUser = Object.keys(user) //check if user contains allowedFields
    .filter((key) => allowedFields.includes(key))
    .reduce((obj, key) => {
      obj[key] = user[key];
      return obj;
    }, {});

  const registeredUser = await findByEmail(filteredUser.email);
  if (!registeredUser) {
    const encryptPassword = await encrypt.hashPassword(filteredUser.password);
    const createUser = new User({ ...filteredUser, password: encryptPassword });
    const newUser = await createUser.save();
    return newUser;
  } else {
    throw new Error('bad request');
  }
}

async function getUser(userId) {
  const user = await User.findById(userId);
  if (user) {
    return user;
  } else {
    throw new Error('not found');
  }
}

async function getUserStat() {
  // get the last users created in the last year
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  const data = await User.aggregate([
    { $match: { createdAt: { $gte: lastYear } } },
    {
      $project: {
        month: { $month: '$createdAt' },
      },
    },
    {
      $group: {
        _id: '$month',
        total: { $sum: 1 },
      },
    },
  ]);
  return data;
}

export default userService;
