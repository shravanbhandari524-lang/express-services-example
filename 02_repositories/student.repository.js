import pool from "../01_config/postgres.config.js";
export const create = async () => {
  try {
  } catch (err) {
    throw err;
  }
};
export const get = async () => {
  try {
    const result = await pool.query(`select * from student;`);
    return result.rows;
  } catch (err) {
    throw err;
  }
};
export const getById = async (id) => {
  try {
    const result = await pool.query(
      ` select 1 from student where studentid = $1`,
      [id],
    );
    return result.rows[0];
  } catch (err) {
    throw err;
  }
};
export const update = async (id, student) => {
  try {
    const result = await pool.query(`
        update student set name = $1 , dob= $2 ,age = $3 ,contact = $4, address = $5 
        `);
  } catch (err) {
    throw err;
  }
};
export const remove = async () => {
  try {
  } catch (err) {
    throw err;
  }
};
