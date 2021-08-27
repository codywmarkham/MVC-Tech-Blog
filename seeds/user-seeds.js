const { User } = require('../models');

const userData = [
  {
    username: "Cody",
    email: "cody@gmail.com",
    password: "ADKVP53K"
  },
  {
    username: "Cori",
    email: "cori@gmail.com",
    password: "DAGJ980G"
  },
  {
    username: "Robert",
    email: "robert@gmail.com",
    password: "HDGJ6KJP"
  },
  {
    username: "Claudia",
    email: "claudia@gmail.com",
    password: "KJ23KPO"
  },
  {
    username: "Autumn",
    email: "autumn@gmail.com",
    password: "NJj6KNP"
  }
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;