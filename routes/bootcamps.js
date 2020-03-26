const express = require('express');

const {
  getbootcamp,
  getbootcamps,
  createbootcamp,
  editbootcamp,
  deletebootcamp
} = require('../controllers/bootcamps');

const router = express.Router();

router
  .route('/')
  .get(getbootcamps)
  .post(createbootcamp);

router
  .route('/:id')
  .get(getbootcamp)
  .put(editbootcamp)
  .delete(deletebootcamp);

module.exports = router;
