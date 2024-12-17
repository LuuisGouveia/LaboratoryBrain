export class JobController {
  static async new(joblist_name) {
    const query = `CREATE TABLE IF NOT EXISTS ${joblist_name} (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT NOT NULL,
    price REAL NOT NULL)`;
    await window.api.new(query);
  }
  static async add(joblist_name, job) {
    const query = `INSERT INTO ${joblist_name} (description, price) VALUES (?, ?)`;
    const params = [job.description, job.price];
    await window.api.addJob(query, params);
  }

  static async remove(joblist_name, job_id) {
    const query = `DELETE FROM ${joblist_name} WHERE id = ?`;
    const params = job_id;
    await window.api.removeJob(query, params);
  }
  static async show(joblist_name) {
    const query = `SELECT * FROM ${joblist_name} ORDER BY description ASC`;
    const params = await window.api.showJob(query);
    return params;
  }
  static async edit(fields, joblist_name, job_id) {
    const updates = Object.keys(fields)
      .map((field) => `${field} = ?`)
      .join(", ");
    const params = Object.values(fields);
    params.push(job_id);

    const query = `UPDATE ${joblist_name} SET ${updates} WHERE id = ?`;
    await window.api.editJob(query, params);
  }
  static async showAll() {
    const query = `SELECT name 
    FROM sqlite_master 
    WHERE type = 'table' AND name NOT LIKE 'sqlite_%';`;
    const params = await window.api.showJob(query);
    return params;
  }
}
