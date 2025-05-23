const getStudents = 'SELECT * FROM students ORDER BY id ASC'
const getStudentById = 'SELECT * FROM students WHERE id = $1'
const checkEmailExists = 'SELECT s FROM students s WHERE s.email = $1'
const addStudent =
  'INSERT INTO students (id,name,email,age,dob) VALUES ($1,$2,$3,$4,$5)'
const updateStudent = 'UPDATE students SET name = $1 WHERE id = $2'
//const updateStudent1 = "UPDATE student SET email = $1 WHERE id = $2";

module.exports = {
  getStudents,
  getStudentById,
  checkEmailExists,
  addStudent,
  updateStudent,
}
