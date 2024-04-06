const db = require("./db.js");
const { SQLGenericError } = require("../errors/SQLGenericError.js");
const findAll = async () => {
  try {
    const [movies] = await db.query("SELECT* FROM `movie`");
    return movies;
  } catch (err) {
    console.log(err);
    throw new SQLGenericError();
  }
};

const findOne = async () => {
  try {
    const [movie] = await db.query("SELECT * FROM `movie` WHERE id = ?", [id]);
    return movie;
  } catch (err) {
    console.log(err);
    throw new SQLGenericError();
  }
};
module.exports = { findAll, findOne };
