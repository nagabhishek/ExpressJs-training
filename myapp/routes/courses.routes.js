const express = require('express');
const courses = require('../model/course.model');

const router = express.Router();

router.route('/').get((req, res) => {
  res.render('courses', { listofcourses: courses, title: 'List Of Courses' });
});

router.route('/coursedetails/:id').get((req, res) => {
  const courseId = +req.params.id;
  const course = courses.find((course) => course.id === courseId);
  res.render('coursedetails', { course });
});

module.exports = router;
