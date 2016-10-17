// dao/userSqlMapping.js
// CRUD SQL语句
var user = {
	insert:'INSERT INTO users(name, password) VALUES(?,?)',
	update:'update users set name=?, age=? where id=?',
	delete: 'delete from users where id=?',
	queryById: 'select * from users where id=?',
	queryAll: 'select * from users'
};
 
module.exports = user;