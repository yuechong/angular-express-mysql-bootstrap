var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log(req.originalUrl);
});

//用户的登录
router.get('/loginUser', function(req, res, next) {
	userDao.add(req, res, next);
});

// 增加用户
router.get('/addUser', function(req, res, next) {
	console.log("增加用户");
	console.log(req.body);
	userDao.add(req, res, next, false);
});
router.post('/addUser', function(req, res, next) {
	console.log("增加用户post");
	console.log(req.body.name);
	userDao.add(req, res, next, true);
});

//删除用户
router.get('/delUser', function(req, res, next) {
	userDao.delete(req, res, next);
});

//查找用户
router.get('/findUser', function(req, res, next) {
	userDao.queryById(req, res, next);
});

//修改用户
router.get('/updateUser', function(req, res, next) {
	userDao.update(req, res, next);
});

//查找全部用户
router.get('/getUsers', function(req, res, next) {
	userDao.queryAll(req, res, next);
});


module.exports = router;
