// const usersData = require('../usersData.json');
const db = require('../db/index');

// const idToUserIndex = usersData.reduce((index, user) => {
//   const { id } = user;
//   index[id] = user;
//   return index;
// }, {});

const getAllUsers = async () => await db.any('SELECT * FROM users');

const getUserById = async (id) => {
  const user = await db.oneOrNone('SELECT * FROM users WHERE id = $1', [
    id,
  ]);
  return user;
}

module.exports = {
  getAllUsers,
  getUserById,
}