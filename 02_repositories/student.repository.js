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
export const update = async (id) => {
  try {
    const result = await pool.query(`
        update student set 
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
