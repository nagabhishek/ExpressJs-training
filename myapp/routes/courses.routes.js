const express = require('express');
var courses = require('../model/course.model');

let router = express.Router();

router.route('/').get((req, res) => {
  res.render('courses', { listofcourses: courses, title: 'List Of Courses' });
});

module.exports = router;
