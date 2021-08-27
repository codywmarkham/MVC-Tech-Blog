const { Post } = require('../models');

const postData = [
  {
    title: 'Sequelize Data Types',
    post_text: 'Sequelize has several built in, handy data types that you can use when you define a model.',
    user_id: 1,
  },
  {
    title: 'Handlebars Template Engine',
    post_text: 'Handlebars is a very useful npm package that allows you to use templates in your code, making things more modular, re-usable, and maintainable.',
    user_id: 2,
  },
  {
    title: 'Handlebars Partials',
    post_text: 'Partials are another handlebars feature where you can create a partial bit of code for something like post information, or for a comment.',
    user_id: 2,
  },
  {
    title: 'Sessions',
    post_text: 'When a user logs in, a session can be established using a package such as Express Session.',
    user_id: 3,
  },
  {
    title: 'Hashing',
    post_text: 'A very important part of user authentication is hashing passwords.',
    user_id: 4,
  },
  {
    title: 'Express.js',
    post_text: 'Express.js is an easy way to set up a server with JavaScript.',
    user_id: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;