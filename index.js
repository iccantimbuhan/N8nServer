import pool from './db.js';

(async () => {
  try {
    const res = await pool.query('SELECT NOW()'); // Test query
    console.log('DB Time:', res.rows[0]);
    process.exit(0);
  } catch (err) {
    console.error('DB Error:', err);
    process.exit(1);
  }
})();
