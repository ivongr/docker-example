const { faker } = require('@faker-js/faker');
const User = require('../models/user');
const Company = require('../models/company');

const index = (req, res) => {
  res.status(200).json({ code: 200, message: 'Welcome to API Template Nodejs Prefix' });
};

function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    company: faker.company.name(),
  };
}

async function seedUsers(count = 10) {
  try {
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      const fakeUsers = faker.helpers.multiple(createRandomUser, { count });
      await User.insertMany(fakeUsers);
    }
  } catch (err) {
    console.error(err);
  }
}

async function getUsers(req, res) {
  try {
    await seedUsers();
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

function createRandomCompany() {
  return {
    name: faker.company.name(),
  };
}
async function sendCompanys(count = 10) {
  try {
    const companyCount = await Company.countDocuments();
    if (companyCount === 0) {
      const fakeCompany = faker.helpers.multiple(createRandomCompany, { count });
      await Company.insertMany(fakeCompany);
    }
  } catch (err) {
    console.error(err);
  }
}
async function getCompanys(req, res) {
  try {
    await sendCompanys();
    const companys = await Company.find();
    res.status(200).json(companys);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  index,
  getUsers,
  getCompanys,
  seedUsers,
};
