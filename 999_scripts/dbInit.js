import pool from "../01_config/postgres.config.js";

const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS staff (
        staffid SERIAL PRIMARY KEY,

        name VARCHAR(100) NOT NULL,

        dob DATE NOT NULL,

        age SMALLINT,

        contact VARCHAR(15) UNIQUE NOT NULL,

        address VARCHAR(255) NOT NULL,

        designation VARCHAR(50) NOT NULL,

        doj DATE NOT NULL,

        email VARCHAR(255) UNIQUE NOT NULL,

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS student (
        studentid SERIAL PRIMARY KEY,

        name VARCHAR(100) NOT NULL,

        dob DATE NOT NULL,

        age SMALLINT,

        email VARCHAR(255) UNIQUE NOT NULL,

        contact VARCHAR(15) UNIQUE NOT NULL,

        address VARCHAR(255) NOT NULL,

        doj DATE NOT NULL,

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS teachers (
        teacherid SERIAL PRIMARY KEY,

        staffid INTEGER UNIQUE NOT NULL,

        subject VARCHAR(100) NOT NULL,

        CONSTRAINT fk_teacher_staff
          FOREIGN KEY (staffid)
          REFERENCES staff(staffid)
          ON DELETE CASCADE
          ON UPDATE CASCADE
      )
    `);

    console.log("Database initialized successfully");
  } catch (err) {
    console.error("Database initialization failed");
    console.error("Code:", err.code);
    console.error("Message:", err.message);
    console.error("Detail:", err.detail);

    process.exit(1);
  }
};

export default initDB;
